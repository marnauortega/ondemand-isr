import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req) {
  if (req.body.slug) revalidatePath(req.body.slug);
  console.log(req.body.slug);
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
