"use client";

import { useEffect } from "react";

const LAST_SELECTED_COURSE_KEY = "nptel:last-selected-course";

const CourseSelectionTracker = ({ slug }: { slug: string }) => {
  useEffect(() => {
    try {
      localStorage.setItem(LAST_SELECTED_COURSE_KEY, slug);
    } catch {
      // no-op for locked storage environments
    }
  }, [slug]);

  return null;
};

export default CourseSelectionTracker;
