type LinkType =
  | 'discord'
  | 'slack'
  | 'telegram'
  | 'x (twitter)'
  | 'github'
  | 'matrix'
  | ''; // TODO: fix this for getLinkType()

export const getLinkType = (link: string, defaultValueWhenValidLink = '') => {
  if (link.includes('discord.com') || link.includes('discord.gg'))
    return 'discord';
  if (link.includes('slack.com')) return 'slack';
  if (link.includes('telegram.com')) return 'telegram';
  if (link.includes('t.me')) return 'telegram';
  if (link.includes('twitter.com')) return 'x (twitter)';
  if (link.includes('github.com')) return 'github';
  if (link.includes('matrix.to')) return 'matrix';
  if (/^https?:\/\/[^\s/$.?#].[^\s]*$/.test(link))
    return defaultValueWhenValidLink;
  return '';
};

export type CategorizedSocialLinks = {
  discords: string[];
  githubs: string[];
  telegrams: string[];
  twitters: string[];
  elements: string[];
  slacks: string[];
  remainingLinks: string[];
};

export const categorizeSocialLinks = (
  links: string[] = [],
): CategorizedSocialLinks => {
  const categorized: CategorizedSocialLinks = {
    discords: [],
    githubs: [],
    telegrams: [],
    twitters: [],
    elements: [],
    slacks: [],
    remainingLinks: [],
  };

  links.forEach((link) => {
    const linkType = getLinkType(link) as LinkType;
    switch (linkType) {
      case 'discord':
        categorized.discords.push(link);
        break;
      case 'github':
        categorized.githubs.push(link);
        break;
      case 'slack':
        categorized.slacks.push(link);
        break;
      case 'telegram':
        categorized.telegrams.push(link);
        break;
      case 'x (twitter)':
        categorized.twitters.push(link);
        break;
      case 'matrix':
        categorized.elements.push(link);
        break;
      default:
        categorized.remainingLinks.push(link);
    }
  });

  return categorized;
};
