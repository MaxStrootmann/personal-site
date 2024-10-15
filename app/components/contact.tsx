import Link from "next/link";
import { MdEmail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import CopyEmail from "./copyEmail";

export default function Contact() {
  return (
    <div
      className="pb-16"
      id="contact"
    >
      <h2 className="pt-4 md:pt-12 text-3xl font-bold">
        Vraag een vrijblijvend gesprek aan:
      </h2>
      <div className="space-y-2 pt-6">
        <div className="flex">
          <MdEmail size={24} />
          <CopyEmail />
        </div>
        <div className="flex gap-4">
          <MdLocalPhone size={24} />
          <a className="underline underline-offset-4" href="tel:+31630141408">
            +31 6 13 24 85 26
          </a>
        </div>
        <div className="flex gap-4">
          <MdLocationPin size={24} />
          <Link
            className="underline underline-offset-4"
            href="https://www.google.com/maps/place/Vlierstraat+6,+1741+VK+Schagen/@52.7991544,4.7945222,16z/data=!3m1!4b1!4m6!3m5!1s0x47cf4e47fc1c8309:0x50b2fe8763322bc0!8m2!3d52.7991544!4d4.7970971!16s%2Fg%2F11c12gczzz?entry=ttu"
          >
            Vlierstraat 6, 1741 VK, Schagen
          </Link>
        </div>
      </div>
    </div>
  );
}
