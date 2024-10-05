"use client";

export default function Page() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const phoneNumber = formData.get("phoneNumber");
    const message = formData.get("message");

    const sms = {
      phone: phoneNumber,
      message: message,
    };

    const res = await fetch("/api/sms", {
      method: "POST",
      body: JSON.stringify(sms),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    console.log(data);

    alert("Message sent!");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-slate-900 rounded-lg p-10" onSubmit={onSubmit}>
        <h1 className="text-white text-3xl font-bold">Send SMS</h1>

        <label htmlFor="phoneNumber" className="text-white block my-4">
          Phone Number:
        </label>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Phone Number"
          className="px-3 py-1 rounded-md block w-full"
          autoComplete="off"
        />

        <label htmlFor="phoneNumber" className="text-white block my-4">
          Write your Message here:
        </label>
        <textarea
          name="message"
          id="message"
          rows="5"
          placeholder="Write your Message here"
          className="px-3 py-1 rounded-md block w-full"
          autoComplete="off"
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md block mt-4">
          Send
        </button>
      </form>
    </div>
  );
}
