import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date().toISOString(), // última modificação da URL base
            changeFrequency: "monthly", // frequência de atualização (pode ser ajustado conforme necessário)
            priority: 1.0 // prioridade mais alta para a página inicial
        },

    ];
}
