import { getBlogStar } from "@/lib/firebase/services";
import { apiResponse } from "@/utils/apiResponse";

export async function GET() {
  const response = await getBlogStar();
  console.log("response: ", response);
  return apiResponse(response);
}