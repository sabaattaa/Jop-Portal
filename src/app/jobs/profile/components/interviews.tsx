"use client"
import { FormData } from '@/lib/types';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { BiCalendar, BiVideoOff } from 'react-icons/bi';
import { FiFileText } from 'react-icons/fi';
import { LuMapPin } from 'react-icons/lu';

const Interviews = () => {


  const [setting, setSetting] = useState({
    scheduled: false,
    openModal: false,

  })


  const [scheduled, setScheduled] = useState(false);
  return (
    <div className="p-6 space-y-6">

      {setting.openModal
        &&
        <InterviewScheduleModal
          onClose={() =>
            setSetting((prev) => ({
              ...prev,
              openModal: false,
            }))
          } />
      }
      {/* Candidate Info */}
      <div className="bg-white shadow rounded-2xl p-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Ali Khan</h2>
          <p className="text-gray-600">Frontend Developer – 3 Years Exp</p>
          <button className="text-blue-600 flex items-center gap-1 mt-2">
            <FiFileText className="w-4 h-4" /> Download Resume
          </button>
        </div>
        <img
          src="/candidate.png"
          alt="Candidate"
          className="w-20 h-20 rounded-full border"
        />
      </div>

      {/* Interview Details */}
      <div className="bg-white shadow rounded-2xl p-6">

        {scheduled ? (
          <div className="space-y-3">
            <h3 className="text-lg font-semibold mb-4">Interview Details</h3>
            <p className="flex items-center gap-2 text-gray-700">
              <BiCalendar className="w-5 h-5 text-blue-500" />
              18th Sept, 3:00 PM
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <BiVideoOff className="w-5 h-5 text-green-500" />
              Google Meet (link:{" "}
              <a href="#" className="text-blue-600">
                join.meet/interview
              </a>
              )
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <LuMapPin className="w-5 h-5 text-red-500" />
              Lahore Office
            </p>
            <div className="flex gap-3 mt-3">
              <button
                onClick={() => setScheduled(false)}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
              >
                Reschedule
              </button>
              <button className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600">
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={() => {
                //  setScheduled(true)
                setSetting((prev) => ({
                  ...prev,
                  openModal: true,
                }))
              }
              }
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Schedule Interview
            </button>
            <button className="px-4 py-2 rounded-lg border border-gray-400 hover:bg-gray-100">
              Mark as Rejected
            </button>
          </div>
        )}
      </div>

      {/* Notes Section */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-2">Interview Notes</h3>
        <textarea
          placeholder="Write feedback about the candidate..."
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-200 outline-none"
          rows={4}
        />
        <button className="mt-3 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
          Save Notes
        </button>
      </div>
    </div>
  )
}

export default Interviews


const InterviewScheduleModal = ({
  onClose,
}: {
  onClose: () => void;
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      mode: "online",
    },
  });

  const mode = watch("mode");

  const onSubmit = (data: FormData) => {
    console.log("Interview Scheduled:", data);

    onClose();
  };

  return (<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl shadow w-full max-w-md p-6">
      <h2 className="text-xl font-bold mb-4">Schedule Interview</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Date */}
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            {...register("date", { required: "Date is required" })}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          />
          {errors.date && (
            <p className="text-red-500 text-sm">{errors.date.message}</p>
          )}
        </div>

        {/* Time */}
        <div>
          <label className="block text-sm font-medium mb-1">Time</label>
          <input
            type="time"
            {...register("time", { required: "Time is required" })}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          />
          {errors.time && (
            <p className="text-red-500 text-sm">{errors.time.message}</p>
          )}
        </div>

        {/* Mode */}
        <div>
          <label className="block text-sm font-medium mb-1">Mode</label>
          <select
            {...register("mode")}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          >
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>

        {/* Online Link */}
        {mode === "online" && (
          <div>
            <label className="block text-sm font-medium mb-1">
              Meeting Link
            </label>
            <input
              type="url"
              placeholder="https://meet.google.com/xyz"
              {...register("link", {
                required: "Meeting link is required",
              })}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
            {errors.link && (
              <p className="text-red-500 text-sm">{errors.link.message}</p>
            )}
          </div>
        )}

        {/* Offline Location */}
        {mode === "offline" && (
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              placeholder="Company Office, Lahore"
              {...register("location", {
                required: "Location is required",
              })}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
            {errors.location && (
              <p className="text-red-500 text-sm">
                {errors.location.message}
              </p>
            )}
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>)
}