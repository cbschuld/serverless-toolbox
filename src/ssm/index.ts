import { SSMClient, GetParameterCommand } from '@aws-sdk/client-ssm' // ES Modules

const ssm = new SSMClient({ region: process.env.REGION })

const getParameterWorker = async (name: string, decrypt: boolean): Promise<string> => {
  return ssm
    .send(new GetParameterCommand({ Name: name, WithDecryption: decrypt }))
    .then((result) => result.Parameter?.Value ?? '')
}

export const getParameter = async (name: string): Promise<string> => {
  return getParameterWorker(name, false)
}

export const getEncryptedParameter = async (name: string): Promise<string> => {
  return getParameterWorker(name, true)
}
