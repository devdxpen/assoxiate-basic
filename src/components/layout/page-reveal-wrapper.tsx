"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { PageLoader } from "@/components/ui/page-loader";

export function PageLoaderWrapper() {
  const pathname = usePathname();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setShowLoader(true);
    const t = setTimeout(() => {
      setShowLoader(false);
    }, 1400);

    return () => clearTimeout(t);
  }, [pathname]);

  return <PageLoader show={showLoader} />;
}
