import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { env } from "@/env";

export const dynamic = "force-dynamic";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  if (!params.slug) {
    return new Response("Invalid slug", { status: 400 });
  }

  const { slug } = params;
  const S3 = new S3Client({
    region: "auto",
    endpoint: `https://${env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: env.R2_ACCESS_KEY,
      secretAccessKey: env.R2_SECRET_KEY,
    },
  });

  const preSignedUrl = await getSignedUrl(
    S3,
    new PutObjectCommand({ Bucket: "zensquid", Key: slug }),
    { expiresIn: 3600 }
  );

  return new Response(JSON.stringify({ url: preSignedUrl }), { status: 200 });
}
