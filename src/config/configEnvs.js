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
  return { SITENAME, HOST, SERVICE };
};
export default getEnvVariables;
