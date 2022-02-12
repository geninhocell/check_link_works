import nodeFetch from 'node-fetch';

type Urls = string[];

type Links = {
  [key: string]: string;
}

function handleError(error: any){
  throw new Error(error.message);
}

async function verifyStatus(urls: Urls){
  try{

    const status = await Promise.all(urls.map(async url => {
      const response = await nodeFetch(url)

      return `${response.status} - ${response.statusText}`;
    }));

    return status;
  }catch(e){
    handleError(e);
  }
}

function mapLinks(links: Links[]){
  return links.map(l => Object.values(l).join());
}

export async function validate(links: Links[]){
  const urls = mapLinks(links);
  const status = await verifyStatus(urls);

  const result = links.map((l, i) => ({
    ...l,
    status: status![i],
  }));

  return result;
}
