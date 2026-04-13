"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const LAST_SELECTED_COURSE_KEY = "nptel:last-selected-course";

const CourseAutoRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    try {
      const lastSelected = localStorage.getItem(LAST_SELECTED_COURSE_KEY);
      if (lastSelected) {
        router.replace(`/course/${lastSelected}`);
      }
    } catch {
      // no-op for non-browser contexts
    }
  }, [router]);

  return null;
};

export default CourseAutoRedirect;
