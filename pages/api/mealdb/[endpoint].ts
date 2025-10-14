import { API_URL } from "@/utils/globals";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req:NextApiRequest, res:NextApiResponse) => {
    const { endpoint, ...queryParams } = req.query;

    if (!endpoint || typeof endpoint !== 'string') {
      return res.status(400).json({ error: "Endpoint not specified" });
    }

    const queryString = new URLSearchParams(queryParams as Record<string, string>).toString();
    const fullApiUrl = `${API_URL}/${endpoint}${queryString ? `?${queryString}` : ''}`;

    try {
        const response = await fetch(fullApiUrl)
        const data = await response.json()
        res.status(200).json(data)

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }

}

export default handler