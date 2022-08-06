import getExpeditiousCache from "express-expeditious";

const defaultOptions = {
  namespace: "apiexpresscache",
  defaultTtl: "1 minute",
  statusCodeExpires: {
    404: "5 minutes",
    500: 0,
  },
};

export default getExpeditiousCache(defaultOptions);
