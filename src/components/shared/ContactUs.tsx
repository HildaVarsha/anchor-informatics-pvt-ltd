"use client";

import React, { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
  Input,
  Textarea,
} from "../ui";
import { sendEmail } from "@/core/constant";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    let valid = true;
    let newErrors = { name: "", email: "", message: "" };

    if (!formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Real-time email validation
    if (name === "email") {
      if (value.trim() === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Email is required",
        }));
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Email is invalid",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "",
        }));
      }
    }
  };

  useEffect(() => {
    const isValid =
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      /\S+@\S+\.\S+/.test(formData.email) &&
      formData.message.trim() !== "";
    setIsFormValid(isValid);
  }, [formData]);

  const handleSubmit = async () => {
    if (validateForm()) {
      setLoading(true);
      const res = await sendEmail({
        name: formData?.name,
        email: formData?.email,
        content: formData?.message,
      });

      if (res == "success") {
        setFormData({
          name: "",
          message: "",
          email: "",
        });
        toast.success(
          "Thank you for contacting us. We will be in touch with you soon."
        );
        setOpen(false);
      } else {
        toast.error("Ohh, Something went wrong. Please try again later.");
      }
      setLoading(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger>
        <Button className="rounded-3xl h-10">Book A Call</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-3xl font-bold text-pink-600">
            Contact Us
          </AlertDialogTitle>
          <AlertDialogDescription>
            Our Team will contact you within two working days.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="pb-2">
          <h1 className="font-semibold pb-2">Name</h1>
          <Input
            className="h-12"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>

        <div className="pb-2">
          <h1 className="font-semibold pb-2">Email</h1>
          <Input
            className="h-12"
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div>
          <h1 className="font-semibold pb-2">Message</h1>
          <Textarea
            className="h-24"
            name="message"
            placeholder="Your Content"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button
            onClick={handleSubmit}
            isLoading={loading}
            disabled={!isFormValid || loading}
          >
            {loading ? "Sending..." : "Send"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
      <ToastContainer />
    </AlertDialog>
  );
};

export default ContactForm;
