const parseEnvNumber = (envVar) => {
  const envVarValue = parseInt(process.env[envVar]);
  if (isNaN(envVarValue)) {
    throw new Error(`Environment variable ${envVar} is not a number`);
  }
  return envVarValue;
};

const parseEnvString = (envVar) => {
  const envVarValue = process.env[envVar];
  if (!envVarValue) {
    throw new Error(`Environment variable ${envVar} is not set`);
  }
  return envVarValue;
};

const parseEnvBoolean = (envVar) => {
  const envVarValue = process.env[envVar];
  if (!envVarValue) {
    throw new Error(`Environment variable ${envVar} is not set`);
  }
  return envVarValue === "true";
};

const getEnvVariables = () => {
  const SITENAME = parseEnvString("REACT_APP_SITE_NAME");
  const HOST = parseEnvString("REACT_APP_BACKEND_HOST");
  const SERVICE = parseEnvString("REACT_APP_BACKEND_SERVICE");
  const API_BACKEND = process.env.REACT_APP_API_BACKEND
  return { SITENAME, HOST, SERVICE ,API_BACKEND};
};
export default getEnvVariables;
