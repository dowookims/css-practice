// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';
import path from 'path';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { problemId } = req.query;
  const data = {
    "id": 1,
    "type": "selector",
    "title": "전체 선택자",
    "description": "블라블라블라",
    "question": "미나 오하요",
    "answer": "ex"
};
  const d = JSON.parse(JSON.stringify(data));
  res.status(200).json(d)
}
