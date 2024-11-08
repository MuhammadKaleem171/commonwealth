/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../index';
export interface CreateThreadResponseCollaboratorsItemUser {
  id?: number;
  email?: string;
  isAdmin?: boolean;
  disableRichText?: boolean;
  emailVerified?: boolean;
  selectedCommunityId?: string;
  emailNotificationInterval?: CommonApi.CreateThreadResponseCollaboratorsItemUserEmailNotificationInterval;
  promotionalEmailsEnabled?: boolean;
  isWelcomeOnboardFlowComplete?: boolean;
  profile: CommonApi.CreateThreadResponseCollaboratorsItemUserProfile;
  xpPoints?: number;
  profileTags?: CommonApi.CreateThreadResponseCollaboratorsItemUserProfileTagsItem[];
  apiKey?: CommonApi.CreateThreadResponseCollaboratorsItemUserApiKey;
  createdAt?: Date;
  updatedAt?: Date;
}
