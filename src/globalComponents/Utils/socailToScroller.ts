export interface IntSocialData {
  order: number;
  site: string;
  username: string;
}

export interface IntSocial {
  title?: string;
  text: string;
}

type TSocialToScrollerUtil = (
  data: IntSocialData[],
  title?: boolean | string
) => IntSocial[];

export const socialToScrollerUtil: TSocialToScrollerUtil = (
  data,
  title = false
) => {
  const socials: IntSocial[] = [];

  data.forEach((social: IntSocialData) => {
    socials.push(
      title
        ? {
            title: typeof title === "string" ? title : social.site,
            text: social.username
          }
        : {
            text: `${social.site}: ${social.username}`
          }
    );
  });

  return socials;
};
