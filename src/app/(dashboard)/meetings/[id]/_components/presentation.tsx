import { S3, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { env } from "@/env";

export default async function Presentation({ id }: { id: string }) {
  const storage = new S3({
    region: "auto",
    endpoint: `https://${env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: env.R2_ACCESS_KEY,
      secretAccessKey: env.R2_SECRET_KEY,
    },
  });
  const cmd = new GetObjectCommand({
    Bucket: "zensquid",
    Key: `presentation-${id}.pptx`,
  });
  const url = await getSignedUrl(storage, cmd, { expiresIn: 3600 });
  return (
    <div className="w-full aspect-video border rounded-lg flex justify-center items-center">
      {url ? (
        <iframe
          src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
            url
          )}`}
          width="100%"
          height="100%"
          title={id}
        ></iframe>
      ) : (
        <div className="w-full h-full bg-muted/50 rounded-lg animate-pulse"></div>
      )}
    </div>
  );
}
