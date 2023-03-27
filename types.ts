export type CreateCaptureResponseType = {
  signedUrls: {
    source: string;
  };
  capture: {
    title: string;
    type: string;
    location: any;
    privacy: string;
    date: string;
    username: string;
    status: string;
    slug: string;
  };
};

export type TriggerCaptureResponseType = {
  title: string;
  type: string;
  location: any;
  privacy: string;
  date: string;
  username: string;
  status: string;
  slug: string;
  latestRun: {
    status: string;
    progress: number;
    currentStage: string;
    artifacts: Array<any>;
  };
};
