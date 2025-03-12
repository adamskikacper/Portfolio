"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm as useFormspree } from "@formspree/react";
import { motion, useInView } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// Define the form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  // Initialize Formspree with your form ID
  // IMPORTANT: Replace "xpzvgkrw" with your actual Formspree form ID from https://formspree.io/forms/
  const [formspreeState, handleFormspreeSubmit] = useFormspree("xeoaqndn");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const animationContainerRef = useRef(null);
  const isInView = useInView(animationContainerRef, { once: true, amount: 0.3 });

  // Initialize react-hook-form with zod validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await handleFormspreeSubmit(data);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle resetting the form after successful submission
  const handleReset = () => {
    reset();
    // Create a new submission context by forcing a re-render
    window.location.href = window.location.pathname + "#contact";
  };

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <motion.div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <h2 className="text-shine text-4xl font-extrabold uppercase text-gray-600 sm:text-5xl md:text-5xl xl:text-7xl dark:text-gray-300">
                Get In Touch
              </h2>
              <motion.div
                ref={animationContainerRef}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true, amount: 1 }}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      delay: 0.2,
                    },
                  },
                }}
                className="relative flex items-center justify-center"
              >
                {isInView && (
                  <DotLottieReact
                    key={isInView ? "visible" : "hidden"}
                    src="https://lottie.host/0136876e-086a-4bf9-97d9-adc223a41e68/mFseHsId2Q.lottie"
                    autoplay={true}
                    speed={0.3}
                    className="absolute -top-[220px] left-0 h-[300px] w-[300px] rotate-[50deg] scale-x-[-1]"
                  />
                )}
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl border border-gray-800/30 bg-background-secondary-light/80 p-8 backdrop-blur-sm dark:border-gray-700/30 dark:bg-background-secondary-dark/80"
          >
            {formspreeState.succeeded ? (
              <div className="flex flex-col items-center justify-center space-y-4 py-12 text-center">
                <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600 dark:text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p className="text-text-secondary-light dark:text-text-secondary-dark">
                  Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-4 rounded-lg bg-yellow-500 px-6 py-2 font-medium text-white transition-colors hover:bg-yellow-600 dark:bg-yellow-500 dark:text-white dark:hover:bg-yellow-600"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register("name")}
                      className="w-full rounded-lg border border-border-light bg-background-primary-light px-4 py-3 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 dark:border-border-dark dark:bg-background-primary-dark dark:focus:border-yellow-500 dark:focus:ring-yellow-500"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="w-full rounded-lg border border-border-light bg-background-primary-light px-4 py-3 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 dark:border-border-dark dark:bg-background-primary-dark dark:focus:border-yellow-500 dark:focus:ring-yellow-500"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register("message")}
                    rows={6}
                    className="w-full rounded-lg border border-border-light bg-background-primary-light px-4 py-3 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 dark:border-border-dark dark:bg-background-primary-dark dark:focus:border-yellow-500 dark:focus:ring-yellow-500"
                    placeholder="Your message here..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative overflow-hidden rounded-lg bg-yellow-500 px-8 py-3 font-medium text-white shadow-lg transition-all hover:bg-yellow-600 hover:shadow-xl dark:bg-yellow-500 dark:hover:bg-yellow-600"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </span>
                    <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-700 group-hover:translate-x-full"></span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          <div className="mt-12 text-center">
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              Prefer to reach out directly? Email me at{" "}
              <a
                href="mailto:contact@kacperadamski.dev"
                className="font-medium text-yellow-500 underline-offset-2 hover:underline dark:text-yellow-500"
              >
                contact@kacperadamski.dev
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
