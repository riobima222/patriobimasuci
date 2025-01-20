import { NextResponse } from "next/server";

export const apiResponse = async (response: boolean | any) => {
  if (response === false) {
    return NextResponse.json({
      ok: false,
      data: [],
    });
  } else {
    return NextResponse.json({
      ok: true,
      data: response,
    });
  }
};
