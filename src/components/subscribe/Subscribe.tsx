"use client";
import React, { useState } from "react";
import { FormEvent } from "react";
import { Mail } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() === "") {
      return;
    }

    setShowSuccessMessage(true);
    setEmail("");

    const timer = setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);

    return () => clearTimeout(timer);
  };

  return (
    <section className="py-4">
      <div className="">
        <Card className="border-0 border-t border-b dark:border">
          <CardContent className="pt-6">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-xl font-bold">Subscribe to my newsletter</h1>
              <p className="mt-3 font-light text-muted-foreground">
                Get notified about new blogs, and updates.
              </p>
            </div>

            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="flex gap-x-3">
                <div className="relative flex-1">
                  <Mail className="w-5 h-5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="w-full pl-11 pr-3 py-2 bg-background font-light text-foreground 
                      border border-input rounded-lg focus:outline-none focus:ring-2 
                      focus:ring-ring focus:border-input placeholder:text-muted-foreground"
                  />
                </div>
                <button
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg 
                    hover:bg-primary/90 transition-colors font-medium"
                >
                  Subscribe
                </button>
              </form>

              {/* Success Message */}
              {showSuccessMessage && (
                <div className="mt-4">
                  <Alert
                    variant="default"
                    className="bg-emerald-50 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-900"
                  >
                    <AlertDescription className="text-emerald-800 dark:text-emerald-200">
                      <span className="font-medium">Success!</span> You have
                      been subscribed to the newsletter.
                    </AlertDescription>
                  </Alert>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Subscribe;
