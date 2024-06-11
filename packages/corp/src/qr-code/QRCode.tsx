"use client";
import { classNames } from "@rafty/ui";
// @ts-expect-error
import ErrorCorrectLevel from "qr.js/lib/ErrorCorrectLevel";
// @ts-expect-error
import QRCodeImpl from "qr.js/lib/QRCode";
import { type SVGAttributes, forwardRef } from "react";

export type QRCode = SVGAttributes<SVGSVGElement> & {
  value: string;
  title?: string;
  level?: "L" | "M" | "Q" | "H";
};

export const QRCode = forwardRef<SVGSVGElement, QRCode>(function QRCode(
  { level = "L", value, title, className, ...props },
  forwardedRef,
) {
  const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
  qrcode.addData(value);
  qrcode.make();
  const cells: boolean[][] = qrcode.modules;

  const createPath = (condition: (cell: boolean) => boolean) =>
    cells
      .map((row, rowIndex) =>
        row
          .map((cell, cellIndex) =>
            condition(cell)
              ? `M ${cellIndex} ${rowIndex} l 1 0 0 1 -1 0 Z`
              : "",
          )
          .join(" "),
      )
      .join(" ");

  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      {...props}
      viewBox={`0 0 ${cells.length} ${cells.length}`}
      className={classNames("size-[100px]", className)}
      ref={forwardedRef}
    >
      {title && <title>{title}</title>}
      <path
        d={createPath((cell) => !cell)}
        className="fill-white dark:fill-black"
      />
      <path
        d={createPath((cell) => cell)}
        className="fill-black dark:fill-white"
      />
    </svg>
  );
});
