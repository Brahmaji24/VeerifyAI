import { Router, Request, Response } from "express";
import mongoose from "mongoose";
import { DemoRequestModel } from "./models/DemoRequest.js";
import { sendDemoRequestNotification } from "./services/formspree.js";

export const router = Router();

router.get("/health", (_req: Request, res: Response) => {
  res.json({ ok: mongoose.connection.readyState === 1 });
});

router.post("/demo-requests", async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, phone } = req.body;

    if (
      typeof firstName !== "string" ||
      typeof lastName !== "string" ||
      typeof email !== "string" ||
      typeof phone !== "string" ||
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !phone.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const validNamePattern = /^\p{L}+(?:[ '\-]\p{L}+)*$/u;

    if (
      !validNamePattern.test(firstName.trim()) ||
      !validNamePattern.test(lastName.trim())
    ) {
      return res.status(400).json({
        success: false,
        message:
          "First and last names may only contain letters, spaces, apostrophes, or hyphens",
      });
    }

    const normalizedPhone = phone.trim();
    const validPhonePattern = /^\+[1-9]\d{7,14}$/;

    if (!validPhonePattern.test(normalizedPhone)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid contact number",
      });
    }

    const validEmailPattern =
      /^[a-z0-9]+(?:[._%+-][a-z0-9]+)*@[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+$/i;

    if (
      normalizedEmail.length > 254 ||
      !validEmailPattern.test(normalizedEmail)
    ) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address",
      });
    }

    const demoRequest =
      mongoose.connection.readyState === 1
        ? await DemoRequestModel.create({
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: normalizedEmail,
            phone: normalizedPhone,
          })
        : null;

    let notificationSent = true;
    try {
      await sendDemoRequestNotification({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: normalizedEmail,
        phone: normalizedPhone,
      });
    } catch (notificationError) {
      notificationSent = false;
      console.error("Formspree notification error:", notificationError);
    }

    return res.status(201).json({
      success: true,
      message: "Submitted",
      data: { id: demoRequest?._id ?? null, notificationSent },
    });
  } catch (error) {
    console.error("Submission error:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to submit",
    });
  }
});
