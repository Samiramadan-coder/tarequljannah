"use client";

import Link from "next/link";
import Image from "next/image";
import { Course } from "../../../types/courses";
import { GraduationCap, Brain, FileText } from "lucide-react";

export default function ListOfCourses({ courses }: { courses: Course[] }) {
  return (
    <div className="container max-w-7xl py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="group relative h-127.5 w-full overflow-hidden rounded-md border border-[#dedede] bg-white transition-all duration-300"
          >
            <div className="absolute inset-0 flex flex-col transition-all duration-300 group-hover:pointer-events-none group-hover:opacity-0">
              <div className="relative h-90 w-full overflow-hidden">
                <Image
                  src={
                    "https://www.tareequljannah.com/wp-content/uploads/2025/12/arabic-test-768x768-1.webp"
                  }
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 rounded-sm bg-white px-2.5 py-1.5 text-xs font-medium text-black shadow-sm">
                  {course.categories.map((category, index) => (
                    <span key={index}>{category.name}</span>
                  ))}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col px-7 py-6">
                <div className="mb-4 flex items-center gap-2">
                  <span className="rounded-sm bg-[#f4f5f9] px-2 py-1 text-xs text-black">
                    All levels
                  </span>
                  <span className="text-sm font-semibold text-[#23c700]">
                    Free
                  </span>
                </div>

                <h3 className="mb-4 text-[16px] font-semibold text-[#111]">
                  {course.title}
                </h3>

                <div className="flex items-center gap-5 text-xs text-[#636b78]">
                  <div className="flex items-center gap-1.5">
                    <GraduationCap className="size-4 text-[#0095f6]" />
                    <span>273 Students</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <FileText className="size-4 text-[#0095f6]" />
                    <span>0 Lessons</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 flex translate-y-3 flex-col bg-[#f5f6fb] px-7 py-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <div className="mb-3 flex size-8 items-center justify-center rounded-md bg-[#262940] text-white">
                <Brain className="size-4" />
              </div>

              <div className="mb-4 flex items-center gap-2">
                <span className="rounded-sm bg-white px-2 py-1 text-xs text-black">
                  All levels
                </span>
                <span className="text-sm font-semibold text-[#23c700]">
                  Free
                </span>
              </div>

              <h3 className="mb-4 text-[16px] font-semibold text-[#111]">
                {course.title}
              </h3>

              <div className="mb-4 flex items-center gap-5 text-xs text-[#636b78]">
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="size-4 text-[#0095f6]" />
                  <span>273 Students</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <FileText className="size-4 text-[#0095f6]" />
                  <span>0 Lessons</span>
                </div>
              </div>

              <p className="max-w-72.5 text-[13px] leading-6 text-[#596173]">
                {course.short_description}
              </p>

              <div className="mt-auto">
                <Link href={`/courses/${course.slug}`}>
                  <button
                    type="button"
                    className="rounded-md bg-[#0797f6] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#087fd0]"
                  >
                    View Detail
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
