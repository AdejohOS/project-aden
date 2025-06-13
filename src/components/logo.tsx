import Image from "next/image";
import Link from "next/link";
export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Link href="/">
          <Image
            alt="Logo"
            src="/images/aden.png"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>
      </div>
      <h2 className="text-lg font-bold text-gray-600">ADEN</h2>
    </div>
  );
};
