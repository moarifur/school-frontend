"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { PlusCircle } from "lucide-react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function EventCalendar() {
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState([
        {
            id: 1,
            title: "Lorem ipsum dolor",
            time: "12:00 PM - 2:00 PM",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "2025-05-22",
        },
        {
            id: 2,
            title: "Consectetur adipiscing",
            time: "3:00 PM - 4:00 PM",
            description: "Another dummy event description.",
            date: "2025-05-23",
        },
    ]);
    const eventDates = events.map((event) =>
        format(new Date(event.date), "yyyy-MM-dd")
    );
    const filteredEvents = date
        ? events.filter(
            (event) =>
                format(new Date(event.date), "yyyy-MM-dd") ===
                format(date, "yyyy-MM-dd")
        )
        : [];

    // Modal form state
    const [form, setForm] = useState({
        title: "",
        time: "",
        description: "",
    });

    const handleAddEvent = () => {
        if (!form.title || !form.time) return;
        const newEvent = {
            id: events.length + 1,
            ...form,
            date: format(date, "yyyy-MM-dd"),
        };
        setEvents([...events, newEvent]);
        setForm({ title: "", time: "", description: "" });
    };

    return (
        <div className="bg-white p-6 rounded-md shadow-sm">
            {/* Calendar */}
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="h-full w-full flex"
                classNames={{
                    months:
                        "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
                    month: "space-y-4 w-full flex flex-col",
                    table: "w-full h-full border-collapse space-y-1",
                    head_row: "",
                    row: "w-full mt-2",
                }}
                modifiers={{
                    event: (day) =>
                        eventDates.includes(format(day, "yyyy-MM-dd")),
                }}
                modifiersClassNames={{
                    event: "bg-indigo-100 text-indigo-700 font-semibold rounded-md",
                }}
            />


            {/* Events Header with Add Button */}
                <div className="flex items-center justify-between mt-6 mb-3">
                <h2 className="text-xl font-semibold">
                    Events for {date ? format(date, "PPP") : "Selected Date"}
                </h2>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="sm" className={`bg-red-400`}>
                            {/*<PlusCircle className="h-4 w-4 mr-2 text-white" />*/}
                            <span className={`text-white`}>Add Event</span>
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add New Event</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            <Input
                                placeholder="Event Title"
                                value={form.title}
                                onChange={(e) => setForm({...form, title: e.target.value})}
                            />
                            <Input
                                placeholder="Time (e.g. 2:00 PM - 3:00 PM)"
                                value={form.time}
                                onChange={(e) => setForm({...form, time: e.target.value})}
                            />
                            <Textarea
                                placeholder="Description"
                                value={form.description}
                                onChange={(e) => setForm({...form, description: e.target.value})}
                            />
                        </div>
                        <DialogFooter>
                            <Button
                                onClick={handleAddEvent}
                                disabled={!form.title || !form.time}
                            >
                                Save
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

                {/* Events List */}
                <div className="flex flex-col gap-4">
                {filteredEvents.length === 0 ? (
                    <p className="text-gray-400 italic">No events for this day.</p>
                ) : (
                    filteredEvents.map((event, i) => (
                        <div
                            key={event.id}
                            className={`p-5 rounded-md border-2 border-gray-100 border-t-4 ${
                                i % 2 === 0 ? "border-t-[#C3EBFA]" : "border-t-[#CFCEFF]"
                            }`}
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-gray-600">{event.title}</h3>
                                <span className="text-gray-400 text-xs">{event.time}</span>
                            </div>
                            <p className="mt-2 text-gray-500 text-sm">{event.description}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
);
}
