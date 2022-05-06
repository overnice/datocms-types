export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** Represents `true` or `false` values. */
  BooleanType: any
  CustomData: any
  /** A ISO 8601 compliant date value */
  Date: any
  /** A ISO 8601 compliant datetime value */
  DateTime: any
  /** Represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). */
  FloatType: any
  /** Represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  IntType: any
  ItemId: any
  JsonField: any
  MetaTagAttributes: any
  UploadId: any
}

/** Record of type Block Link (block_link) */
export type BlockLinkRecord = {
  __typename?: 'BlockLinkRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  ariaLabel?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  headline?: Maybe<Scalars['String']>
  href?: Maybe<Scalars['String']>
  id: Scalars['ItemId']
  image?: Maybe<FileField>
  linkLabel?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Record of type Block Link (block_link) */
export type BlockLinkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']>
}

export type CallToActionModelLinkField = ClientRecord | TeamMemberRecord

/** Record of type Call to Action (call_to_action) */
export type CallToActionRecord = {
  __typename?: 'CallToActionRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  href?: Maybe<Scalars['String']>
  id: Scalars['ItemId']
  isExternalLink?: Maybe<Scalars['BooleanType']>
  link?: Maybe<CallToActionModelLinkField>
  linkLabel?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Record of type Call to Action (call_to_action) */
export type CallToActionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type CaseStudyModelContentBlocksField =
  | BlockLinkRecord
  | CallToActionRecord
  | FullWidthImageRecord
  | RichTextRecord
  | TileGridRecord

export type CaseStudyModelContentField = {
  __typename?: 'CaseStudyModelContentField'
  blocks: Array<CaseStudyModelContentBlocksField>
  links: Array<Scalars['String']>
  value: Scalars['JsonField']
}

export type CaseStudyModelContentFieldMultiLocaleField = {
  __typename?: 'CaseStudyModelContentFieldMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value?: Maybe<CaseStudyModelContentField>
}

export type CaseStudyModelFilter = {
  _createdAt?: InputMaybe<CreatedAtFilter>
  createdAt?: InputMaybe<CreatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  updatedAt?: InputMaybe<UpdatedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  projectName?: InputMaybe<StringFilter>
  secondHighlightColor?: InputMaybe<ColorFilter>
  client?: InputMaybe<StringFilter>
  date?: InputMaybe<DateFilter>
  sublineTags?: InputMaybe<JsonFilter>
  backgroundColor?: InputMaybe<ColorFilter>
  textColor?: InputMaybe<ColorFilter>
  highlightColor?: InputMaybe<ColorFilter>
  content?: InputMaybe<StructuredTextFilter>
  title?: InputMaybe<StringFilter>
  tags?: InputMaybe<SeoFilter>
  slug?: InputMaybe<SlugFilter>
  OR?: InputMaybe<Array<InputMaybe<CaseStudyModelFilter>>>
}

export enum CaseStudyModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  ProjectNameAsc = 'projectName_ASC',
  ProjectNameDesc = 'projectName_DESC',
  ClientAsc = 'client_ASC',
  ClientDesc = 'client_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Record of type Case study (case_study) */
export type CaseStudyRecord = {
  __typename?: 'CaseStudyRecord'
  _allContentLocales?: Maybe<
    Array<Maybe<CaseStudyModelContentFieldMultiLocaleField>>
  >
  _allProjectNameLocales?: Maybe<Array<Maybe<StringMultiLocaleField>>>
  _allTitleLocales?: Maybe<Array<Maybe<StringMultiLocaleField>>>
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  backgroundColor?: Maybe<ColorField>
  client?: Maybe<Scalars['String']>
  content?: Maybe<CaseStudyModelContentField>
  createdAt: Scalars['DateTime']
  date?: Maybe<Scalars['Date']>
  highlightColor?: Maybe<ColorField>
  id: Scalars['ItemId']
  projectName?: Maybe<Scalars['String']>
  secondHighlightColor?: Maybe<ColorField>
  slug?: Maybe<Scalars['String']>
  sublineTags?: Maybe<Scalars['JsonField']>
  tags?: Maybe<SeoField>
  textColor?: Maybe<ColorField>
  tile: Array<InteractiveImageTileRecord>
  title?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Record of type Case study (case_study) */
export type CaseStudyRecord_AllContentLocalesArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Case study (case_study) */
export type CaseStudyRecord_AllProjectNameLocalesArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Case study (case_study) */
export type CaseStudyRecord_AllTitleLocalesArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Case study (case_study) */
export type CaseStudyRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Case study (case_study) */
export type CaseStudyRecordContentArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Case study (case_study) */
export type CaseStudyRecordProjectNameArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Case study (case_study) */
export type CaseStudyRecordTitleArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Case Study Tile (case_study_tile) */
export type CaseStudyTileRecord = {
  __typename?: 'CaseStudyTileRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  caseStudy?: Maybe<CaseStudyRecord>
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  updatedAt: Scalars['DateTime']
}

/** Record of type Case Study Tile (case_study_tile) */
export type CaseStudyTileRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Client Grid (client_grid) */
export type ClientGridRecord = {
  __typename?: 'ClientGridRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  updatedAt: Scalars['DateTime']
}

/** Record of type Client Grid (client_grid) */
export type ClientGridRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type ClientModelFilter = {
  _createdAt?: InputMaybe<CreatedAtFilter>
  createdAt?: InputMaybe<CreatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  updatedAt?: InputMaybe<UpdatedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  websiteUrl?: InputMaybe<StringFilter>
  excerpt?: InputMaybe<StringFilter>
  logo?: InputMaybe<FileFilter>
  name?: InputMaybe<StringFilter>
  OR?: InputMaybe<Array<InputMaybe<ClientModelFilter>>>
}

export enum ClientModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  WebsiteUrlAsc = 'websiteUrl_ASC',
  WebsiteUrlDesc = 'websiteUrl_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
}

/** Record of type Client (client) */
export type ClientRecord = {
  __typename?: 'ClientRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  excerpt?: Maybe<Scalars['String']>
  id: Scalars['ItemId']
  logo?: Maybe<FileField>
  name?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
  websiteUrl?: Maybe<Scalars['String']>
}

/** Record of type Client (client) */
export type ClientRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type CollectionMetadata = {
  __typename?: 'CollectionMetadata'
  count: Scalars['IntType']
}

export enum ColorBucketType {
  Red = 'red',
  Orange = 'orange',
  Pink = 'pink',
  Cyan = 'cyan',
  Purple = 'purple',
  Blue = 'blue',
  Yellow = 'yellow',
  Green = 'green',
  Brown = 'brown',
  Grey = 'grey',
  White = 'white',
  Black = 'black',
}

export type ColorField = {
  __typename?: 'ColorField'
  alpha?: Maybe<Scalars['IntType']>
  blue?: Maybe<Scalars['IntType']>
  green?: Maybe<Scalars['IntType']>
  hex?: Maybe<Scalars['String']>
  red?: Maybe<Scalars['IntType']>
}

/** Specifies how to filter Color fields */
export type ColorFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
}

/** Specifies how to filter by creation datetime */
export type CreatedAtFilter = {
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']>
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
}

/** Specifies how to filter Date fields */
export type DateFilter = {
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['Date']>
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['Date']>
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['Date']>
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['Date']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['Date']>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['Date']>
}

/** Record of type Empty Tile (empty_tile) */
export type EmptyTileRecord = {
  __typename?: 'EmptyTileRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  colSpan?: Maybe<Scalars['IntType']>
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  rowSpan?: Maybe<Scalars['IntType']>
  updatedAt: Scalars['DateTime']
}

/** Record of type Empty Tile (empty_tile) */
export type EmptyTileRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export enum FaviconType {
  Icon = 'icon',
  AppleTouchIcon = 'appleTouchIcon',
  MsApplication = 'msApplication',
}

export type FileField = {
  __typename?: 'FileField'
  _createdAt: Scalars['DateTime']
  _updatedAt: Scalars['DateTime']
  alt?: Maybe<Scalars['String']>
  author?: Maybe<Scalars['String']>
  basename: Scalars['String']
  blurUpThumb?: Maybe<Scalars['String']>
  blurhash?: Maybe<Scalars['String']>
  colors: Array<Maybe<ColorField>>
  copyright?: Maybe<Scalars['String']>
  customData?: Maybe<Scalars['CustomData']>
  exifInfo?: Maybe<Scalars['CustomData']>
  filename: Scalars['String']
  focalPoint?: Maybe<FocalPoint>
  format: Scalars['String']
  height?: Maybe<Scalars['IntType']>
  id: Scalars['UploadId']
  md5: Scalars['String']
  mimeType: Scalars['String']
  notes?: Maybe<Scalars['String']>
  responsiveImage?: Maybe<ResponsiveImage>
  size: Scalars['IntType']
  smartTags: Array<Maybe<Scalars['String']>>
  tags: Array<Maybe<Scalars['String']>>
  title?: Maybe<Scalars['String']>
  url: Scalars['String']
  video?: Maybe<UploadVideoField>
  width?: Maybe<Scalars['IntType']>
}

export type FileFieldAltArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

export type FileFieldBlurUpThumbArgs = {
  punch?: InputMaybe<Scalars['Float']>
  size?: InputMaybe<Scalars['Int']>
  quality?: InputMaybe<Scalars['Int']>
  imgixParams?: InputMaybe<ImgixParams>
}

export type FileFieldCustomDataArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

export type FileFieldFocalPointArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

export type FileFieldResponsiveImageArgs = {
  imgixParams?: InputMaybe<ImgixParams>
  sizes?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

export type FileFieldTitleArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

export type FileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>
}

/** Specifies how to filter Single-file/image fields */
export type FileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: InputMaybe<Scalars['UploadId']>
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: InputMaybe<Scalars['UploadId']>
  /** Filter records that have one of the specified uploads */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>
  /** Filter records that do not have one of the specified uploads */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
}

/** Record of type Full Width Image (full_width_image) */
export type FullWidthImageRecord = {
  __typename?: 'FullWidthImageRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  image?: Maybe<FileField>
  needsBorder?: Maybe<Scalars['BooleanType']>
  updatedAt: Scalars['DateTime']
}

/** Record of type Full Width Image (full_width_image) */
export type FullWidthImageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type GlobalSeoField = {
  __typename?: 'GlobalSeoField'
  facebookPageUrl?: Maybe<Scalars['String']>
  fallbackSeo?: Maybe<SeoField>
  siteName?: Maybe<Scalars['String']>
  titleSuffix?: Maybe<Scalars['String']>
  twitterAccount?: Maybe<Scalars['String']>
}

/** Record of type Highlight Tile (highlight_tile) */
export type HighlightTileRecord = {
  __typename?: 'HighlightTileRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  label?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Record of type Highlight Tile (highlight_tile) */
export type HighlightTileRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type HomepageModelContentBlocksField =
  | CallToActionRecord
  | FullWidthImageRecord
  | TileGridRecord

export type HomepageModelContentField = {
  __typename?: 'HomepageModelContentField'
  blocks: Array<HomepageModelContentBlocksField>
  links: Array<Scalars['String']>
  value: Scalars['JsonField']
}

export type HomepageModelContentFieldMultiLocaleField = {
  __typename?: 'HomepageModelContentFieldMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value?: Maybe<HomepageModelContentField>
}

/** Record of type Homepage (homepage) */
export type HomepageRecord = {
  __typename?: 'HomepageRecord'
  _allContentLocales?: Maybe<
    Array<Maybe<HomepageModelContentFieldMultiLocaleField>>
  >
  _allTitleLocales?: Maybe<Array<Maybe<StringMultiLocaleField>>>
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  content?: Maybe<HomepageModelContentField>
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  tags?: Maybe<SeoField>
  title?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Record of type Homepage (homepage) */
export type HomepageRecord_AllContentLocalesArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Homepage (homepage) */
export type HomepageRecord_AllTitleLocalesArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Homepage (homepage) */
export type HomepageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Homepage (homepage) */
export type HomepageRecordContentArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Homepage (homepage) */
export type HomepageRecordTitleArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Image Tile (image_tile) */
export type ImageTileRecord = {
  __typename?: 'ImageTileRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  colSpan?: Maybe<Scalars['IntType']>
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  image?: Maybe<FileField>
  needsBorder?: Maybe<Scalars['BooleanType']>
  rowSpan?: Maybe<Scalars['IntType']>
  updatedAt: Scalars['DateTime']
}

/** Record of type Image Tile (image_tile) */
export type ImageTileRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
   */
  ar?: InputMaybe<Scalars['String']>
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   */
  bg?: InputMaybe<Scalars['String']>
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars['IntType']>
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars['String']>
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH?: InputMaybe<Scalars['FloatType']>
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad?: InputMaybe<Scalars['IntType']>
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW?: InputMaybe<Scalars['FloatType']>
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX?: InputMaybe<Scalars['IntType']>
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY?: InputMaybe<Scalars['IntType']>
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend?: InputMaybe<Scalars['String']>
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur?: InputMaybe<Scalars['IntType']>
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars['IntType']>
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars['IntType']>
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner?: InputMaybe<Scalars['String']>
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius?: InputMaybe<Scalars['String']>
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars['IntType']>
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars['IntType']>
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border?: InputMaybe<Scalars['String']>
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri?: InputMaybe<Scalars['IntType']>
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub?: InputMaybe<Scalars['IntType']>
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant?: InputMaybe<Scalars['IntType']>
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors?: InputMaybe<Scalars['IntType']>
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con?: InputMaybe<Scalars['IntType']>
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars['String']>
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   */
  cs?: InputMaybe<ImgixParamsCs>
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   */
  dl?: InputMaybe<Scalars['String']>
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi?: InputMaybe<Scalars['IntType']>
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   */
  dpr?: InputMaybe<Scalars['FloatType']>
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars['IntType']>
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars['String']>
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp?: InputMaybe<Scalars['IntType']>
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   */
  expires?: InputMaybe<Scalars['IntType']>
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex?: InputMaybe<Scalars['IntType']>
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad?: InputMaybe<Scalars['FloatType']>
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces?: InputMaybe<Scalars['IntType']>
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars['String']>
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill?: InputMaybe<ImgixParamsFill>
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   */
  fit?: InputMaybe<ImgixParamsFit>
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip?: InputMaybe<ImgixParamsFlip>
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   */
  fm?: InputMaybe<ImgixParamsFm>
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug?: InputMaybe<Scalars['BooleanType']>
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX?: InputMaybe<Scalars['FloatType']>
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY?: InputMaybe<Scalars['FloatType']>
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ?: InputMaybe<Scalars['FloatType']>
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam?: InputMaybe<Scalars['IntType']>
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors?: InputMaybe<Scalars['String']>
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize?: InputMaybe<Scalars['IntType']>
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   */
  h?: InputMaybe<Scalars['FloatType']>
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high?: InputMaybe<Scalars['IntType']>
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn?: InputMaybe<Scalars['IntType']>
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue?: InputMaybe<Scalars['IntType']>
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert?: InputMaybe<Scalars['BooleanType']>
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   */
  iptc?: InputMaybe<ImgixParamsIptc>
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless?: InputMaybe<Scalars['BooleanType']>
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha?: InputMaybe<Scalars['IntType']>
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase?: InputMaybe<Scalars['String']>
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH?: InputMaybe<Scalars['FloatType']>
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad?: InputMaybe<Scalars['IntType']>
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
   */
  markRot?: InputMaybe<Scalars['FloatType']>
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale?: InputMaybe<Scalars['IntType']>
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW?: InputMaybe<Scalars['FloatType']>
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX?: InputMaybe<Scalars['IntType']>
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY?: InputMaybe<Scalars['IntType']>
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark?: InputMaybe<Scalars['String']>
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg?: InputMaybe<Scalars['String']>
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   */
  mask?: InputMaybe<Scalars['String']>
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH?: InputMaybe<Scalars['IntType']>
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW?: InputMaybe<Scalars['IntType']>
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH?: InputMaybe<Scalars['IntType']>
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW?: InputMaybe<Scalars['IntType']>
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars['String']>
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr?: InputMaybe<Scalars['IntType']>
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs?: InputMaybe<Scalars['IntType']>
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient?: InputMaybe<Scalars['IntType']>
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
   */
  padBottom?: InputMaybe<Scalars['IntType']>
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
   */
  padLeft?: InputMaybe<Scalars['IntType']>
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
   */
  padRight?: InputMaybe<Scalars['IntType']>
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
   */
  padTop?: InputMaybe<Scalars['IntType']>
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad?: InputMaybe<Scalars['IntType']>
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
   */
  page?: InputMaybe<Scalars['IntType']>
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette?: InputMaybe<ImgixParamsPalette>
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']>
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix?: InputMaybe<Scalars['String']>
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   */
  px?: InputMaybe<Scalars['IntType']>
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   */
  q?: InputMaybe<Scalars['IntType']>
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   */
  rect?: InputMaybe<Scalars['String']>
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot?: InputMaybe<Scalars['FloatType']>
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat?: InputMaybe<Scalars['IntType']>
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia?: InputMaybe<Scalars['IntType']>
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad?: InputMaybe<Scalars['FloatType']>
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp?: InputMaybe<Scalars['FloatType']>
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars['String']>
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd?: InputMaybe<Scalars['FloatType']>
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad?: InputMaybe<Scalars['IntType']>
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd?: InputMaybe<Scalars['FloatType']>
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol?: InputMaybe<Scalars['FloatType']>
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim?: InputMaybe<ImgixParamsTrim>
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor?: InputMaybe<Scalars['String']>
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont?: InputMaybe<Scalars['String']>
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead?: InputMaybe<Scalars['IntType']>
  /**
   * Text Ligatures
   *
   * Controls the level of ligature substitution
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-lig)
   */
  txtLig?: InputMaybe<Scalars['IntType']>
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor?: InputMaybe<Scalars['String']>
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine?: InputMaybe<Scalars['IntType']>
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad?: InputMaybe<Scalars['IntType']>
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad?: InputMaybe<Scalars['FloatType']>
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize?: InputMaybe<Scalars['IntType']>
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack?: InputMaybe<Scalars['IntType']>
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth?: InputMaybe<Scalars['IntType']>
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   */
  txt?: InputMaybe<Scalars['String']>
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm?: InputMaybe<Scalars['IntType']>
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad?: InputMaybe<Scalars['FloatType']>
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib?: InputMaybe<Scalars['IntType']>
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   */
  w?: InputMaybe<Scalars['FloatType']>
}

export enum ImgixParamsAuto {
  Enhance = 'enhance',
  Format = 'format',
  Redeye = 'redeye',
  Compress = 'compress',
}

export enum ImgixParamsBlendAlign {
  Top = 'top',
  Bottom = 'bottom',
  Middle = 'middle',
  Left = 'left',
  Right = 'right',
  Center = 'center',
}

export enum ImgixParamsBlendCrop {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
  Faces = 'faces',
}

export enum ImgixParamsBlendFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Scale = 'scale',
  Max = 'max',
}

export enum ImgixParamsBlendMode {
  Color = 'color',
  Burn = 'burn',
  Dodge = 'dodge',
  Darken = 'darken',
  Difference = 'difference',
  Exclusion = 'exclusion',
  Hardlight = 'hardlight',
  Hue = 'hue',
  Lighten = 'lighten',
  Luminosity = 'luminosity',
  Multiply = 'multiply',
  Overlay = 'overlay',
  Saturation = 'saturation',
  Screen = 'screen',
  Softlight = 'softlight',
  Normal = 'normal',
}

export enum ImgixParamsBlendSize {
  Inherit = 'inherit',
}

export enum ImgixParamsCh {
  Width = 'width',
  Dpr = 'dpr',
  SaveData = 'saveData',
}

export enum ImgixParamsCrop {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
  Faces = 'faces',
  Entropy = 'entropy',
  Edges = 'edges',
  Focalpoint = 'focalpoint',
}

export enum ImgixParamsCs {
  Srgb = 'srgb',
  Adobergb1998 = 'adobergb1998',
  Tinysrgb = 'tinysrgb',
  Strip = 'strip',
}

export enum ImgixParamsFill {
  Solid = 'solid',
  Blur = 'blur',
}

export enum ImgixParamsFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Facearea = 'facearea',
  Fill = 'fill',
  Fillmax = 'fillmax',
  Max = 'max',
  Min = 'min',
  Scale = 'scale',
}

export enum ImgixParamsFlip {
  H = 'h',
  V = 'v',
  Hv = 'hv',
}

export enum ImgixParamsFm {
  Gif = 'gif',
  Jpg = 'jpg',
  Jp2 = 'jp2',
  Json = 'json',
  Jxr = 'jxr',
  Pjpg = 'pjpg',
  Mp4 = 'mp4',
  Png = 'png',
  Png8 = 'png8',
  Png32 = 'png32',
  Webp = 'webp',
  Webm = 'webm',
  Blurhash = 'blurhash',
  Avif = 'avif',
}

export enum ImgixParamsIptc {
  Allow = 'allow',
  Block = 'block',
}

export enum ImgixParamsMarkAlign {
  Top = 'top',
  Middle = 'middle',
  Bottom = 'bottom',
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

export enum ImgixParamsMarkFit {
  Clip = 'clip',
  Crop = 'crop',
  Fill = 'fill',
  Max = 'max',
  Scale = 'scale',
}

export enum ImgixParamsMarkTile {
  Grid = 'grid',
}

export enum ImgixParamsPalette {
  Css = 'css',
  Json = 'json',
}

export enum ImgixParamsTransparency {
  Grid = 'grid',
}

export enum ImgixParamsTrim {
  Auto = 'auto',
  Color = 'color',
}

export enum ImgixParamsTxtAlign {
  Top = 'top',
  Middle = 'middle',
  Bottom = 'bottom',
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

export enum ImgixParamsTxtClip {
  Start = 'start',
  Middle = 'middle',
  End = 'end',
  Ellipsis = 'ellipsis',
}

export enum ImgixParamsTxtFit {
  Max = 'max',
}

/** Specifies how to filter by usage */
export type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars['BooleanType']>
}

/** Record of type Interactive Image Tile (interactive_image_tile) */
export type InteractiveImageTileRecord = {
  __typename?: 'InteractiveImageTileRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  ariaLabel?: Maybe<Scalars['String']>
  colSpan?: Maybe<Scalars['IntType']>
  createdAt: Scalars['DateTime']
  href?: Maybe<Scalars['String']>
  id: Scalars['ItemId']
  image?: Maybe<FileField>
  isLink?: Maybe<Scalars['BooleanType']>
  label?: Maybe<Scalars['String']>
  labelBackgroundColor?: Maybe<ColorField>
  labelTextColor?: Maybe<ColorField>
  needsBorder?: Maybe<Scalars['BooleanType']>
  rowSpan?: Maybe<Scalars['IntType']>
  updatedAt: Scalars['DateTime']
}

/** Record of type Interactive Image Tile (interactive_image_tile) */
export type InteractiveImageTileRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type InteractiveImageTileRecordListListNonNullMultiLocaleField = {
  __typename?: 'InteractiveImageTileRecordListListNonNullMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value: Array<InteractiveImageTileRecord>
}

/** Specifies how to filter by ID */
export type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars['ItemId']>
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars['ItemId']>
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>
}

export enum ItemStatus {
  Draft = 'draft',
  Updated = 'updated',
  Published = 'published',
}

/** Record of type Job Listing (job_listing) */
export type JobListingRecord = {
  __typename?: 'JobListingRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  updatedAt: Scalars['DateTime']
}

/** Record of type Job Listing (job_listing) */
export type JobListingRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type JobModelContentBlocksField =
  | CallToActionRecord
  | RichTextRecord
  | TileGridRecord

export type JobModelContentField = {
  __typename?: 'JobModelContentField'
  blocks: Array<JobModelContentBlocksField>
  links: Array<Scalars['String']>
  value: Scalars['JsonField']
}

export type JobModelFilter = {
  _createdAt?: InputMaybe<CreatedAtFilter>
  createdAt?: InputMaybe<CreatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  updatedAt?: InputMaybe<UpdatedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  content?: InputMaybe<StructuredTextFilter>
  tags?: InputMaybe<SeoFilter>
  slug?: InputMaybe<SlugFilter>
  startDate?: InputMaybe<DateFilter>
  excerpt?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
  OR?: InputMaybe<Array<InputMaybe<JobModelFilter>>>
}

export enum JobModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Record of type Job (job) */
export type JobRecord = {
  __typename?: 'JobRecord'
  _allExcerptLocales?: Maybe<Array<Maybe<StringMultiLocaleField>>>
  _allTagsLocales?: Maybe<Array<Maybe<SeoFieldMultiLocaleField>>>
  _allTitleLocales?: Maybe<Array<Maybe<StringMultiLocaleField>>>
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  content?: Maybe<JobModelContentField>
  createdAt: Scalars['DateTime']
  excerpt?: Maybe<Scalars['String']>
  id: Scalars['ItemId']
  slug?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['Date']>
  tags?: Maybe<SeoField>
  title?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Record of type Job (job) */
export type JobRecord_AllExcerptLocalesArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Job (job) */
export type JobRecord_AllTagsLocalesArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Job (job) */
export type JobRecord_AllTitleLocalesArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Job (job) */
export type JobRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Job (job) */
export type JobRecordExcerptArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Job (job) */
export type JobRecordTagsArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Job (job) */
export type JobRecordTitleArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Specifies how to filter JSON fields */
export type JsonFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
}

export type LogoTileGridModelTilesField = EmptyTileRecord | LogoTileRecord

/** Record of type Logo tile grid (logo_tile_grid) */
export type LogoTileGridRecord = {
  __typename?: 'LogoTileGridRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  tiles: Array<LogoTileGridModelTilesField>
  updatedAt: Scalars['DateTime']
}

/** Record of type Logo tile grid (logo_tile_grid) */
export type LogoTileGridRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Logo tile (logo_tile) */
export type LogoTileRecord = {
  __typename?: 'LogoTileRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  logo?: Maybe<FileField>
  updatedAt: Scalars['DateTime']
}

/** Record of type Logo tile (logo_tile) */
export type LogoTileRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export enum MuxThumbnailFormatType {
  Jpg = 'jpg',
  Png = 'png',
  Gif = 'gif',
}

/** Specifies how to filter by image orientation */
export type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>
}

export type PageModelContentBlocksField =
  | CallToActionRecord
  | ClientGridRecord
  | FullWidthImageRecord
  | JobListingRecord
  | LogoTileGridRecord
  | RichTextRecord
  | TileGridRecord

export type PageModelContentField = {
  __typename?: 'PageModelContentField'
  blocks: Array<PageModelContentBlocksField>
  links: Array<Scalars['String']>
  value: Scalars['JsonField']
}

export type PageModelContentFieldMultiLocaleField = {
  __typename?: 'PageModelContentFieldMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value?: Maybe<PageModelContentField>
}

export type PageModelFilter = {
  _createdAt?: InputMaybe<CreatedAtFilter>
  createdAt?: InputMaybe<CreatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  updatedAt?: InputMaybe<UpdatedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  content?: InputMaybe<StructuredTextFilter>
  pageName?: InputMaybe<StringFilter>
  slug?: InputMaybe<SlugFilter>
  title?: InputMaybe<StringFilter>
  tags?: InputMaybe<SeoFilter>
  OR?: InputMaybe<Array<InputMaybe<PageModelFilter>>>
}

export enum PageModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Record of type Page (page) */
export type PageRecord = {
  __typename?: 'PageRecord'
  _allContentLocales?: Maybe<
    Array<Maybe<PageModelContentFieldMultiLocaleField>>
  >
  _allPageNameLocales?: Maybe<Array<Maybe<StringMultiLocaleField>>>
  _allTitleLocales?: Maybe<Array<Maybe<StringMultiLocaleField>>>
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  content?: Maybe<PageModelContentField>
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  pageName?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  tags?: Maybe<SeoField>
  title?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Record of type Page (page) */
export type PageRecord_AllContentLocalesArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Page (page) */
export type PageRecord_AllPageNameLocalesArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Page (page) */
export type PageRecord_AllTitleLocalesArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Page (page) */
export type PageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Page (page) */
export type PageRecordContentArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Page (page) */
export type PageRecordPageNameArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Page (page) */
export type PageRecordTitleArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Specifies how to filter by publication datetime */
export type PublishedAtFilter = {
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']>
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
}

/** The query root for this schema */
export type Query = {
  __typename?: 'Query'
  /** Returns meta information regarding a record collection */
  _allCaseStudiesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allClientsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allJobsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allPagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allTeamMembersMeta: CollectionMetadata
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta?: Maybe<CollectionMetadata>
  /** Returns the single instance record */
  _site: Site
  /** Returns a collection of records */
  allCaseStudies: Array<CaseStudyRecord>
  /** Returns a collection of records */
  allClients: Array<ClientRecord>
  /** Returns a collection of records */
  allJobs: Array<JobRecord>
  /** Returns a collection of records */
  allPages: Array<PageRecord>
  /** Returns a collection of records */
  allTeamMembers: Array<TeamMemberRecord>
  /** Returns a collection of assets */
  allUploads: Array<FileField>
  /** Returns a specific record */
  caseStudy?: Maybe<CaseStudyRecord>
  /** Returns a specific record */
  client?: Maybe<ClientRecord>
  /** Returns the single instance record */
  homepage?: Maybe<HomepageRecord>
  /** Returns a specific record */
  job?: Maybe<JobRecord>
  /** Returns a specific record */
  page?: Maybe<PageRecord>
  /** Returns a specific record */
  teamMember?: Maybe<TeamMemberRecord>
  /** Returns a specific asset */
  upload?: Maybe<FileField>
}

/** The query root for this schema */
export type Query_AllCaseStudiesMetaArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<CaseStudyModelFilter>
}

/** The query root for this schema */
export type Query_AllClientsMetaArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<ClientModelFilter>
}

/** The query root for this schema */
export type Query_AllJobsMetaArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<JobModelFilter>
}

/** The query root for this schema */
export type Query_AllPagesMetaArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PageModelFilter>
}

/** The query root for this schema */
export type Query_AllTeamMembersMetaArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<TeamMemberModelFilter>
}

/** The query root for this schema */
export type Query_AllUploadsMetaArgs = {
  locale?: InputMaybe<SiteLocale>
  filter?: InputMaybe<UploadFilter>
}

/** The query root for this schema */
export type Query_SiteArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** The query root for this schema */
export type QueryAllCaseStudiesArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  skip?: InputMaybe<Scalars['IntType']>
  first?: InputMaybe<Scalars['IntType']>
  filter?: InputMaybe<CaseStudyModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<CaseStudyModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllClientsArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  skip?: InputMaybe<Scalars['IntType']>
  first?: InputMaybe<Scalars['IntType']>
  filter?: InputMaybe<ClientModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<ClientModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllJobsArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  skip?: InputMaybe<Scalars['IntType']>
  first?: InputMaybe<Scalars['IntType']>
  filter?: InputMaybe<JobModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<JobModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllPagesArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  skip?: InputMaybe<Scalars['IntType']>
  first?: InputMaybe<Scalars['IntType']>
  filter?: InputMaybe<PageModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllTeamMembersArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  skip?: InputMaybe<Scalars['IntType']>
  first?: InputMaybe<Scalars['IntType']>
  filter?: InputMaybe<TeamMemberModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<TeamMemberModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllUploadsArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  skip?: InputMaybe<Scalars['IntType']>
  first?: InputMaybe<Scalars['IntType']>
  filter?: InputMaybe<UploadFilter>
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>
}

/** The query root for this schema */
export type QueryCaseStudyArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<CaseStudyModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<CaseStudyModelOrderBy>>>
}

/** The query root for this schema */
export type QueryClientArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<ClientModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<ClientModelOrderBy>>>
}

/** The query root for this schema */
export type QueryHomepageArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** The query root for this schema */
export type QueryJobArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<JobModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<JobModelOrderBy>>>
}

/** The query root for this schema */
export type QueryPageArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PageModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryTeamMemberArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<TeamMemberModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<TeamMemberModelOrderBy>>>
}

/** The query root for this schema */
export type QueryUploadArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<UploadFilter>
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>
}

/** Record of type Quote tile (quote_tile) */
export type QuoteTileRecord = {
  __typename?: 'QuoteTileRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  authorImage?: Maybe<FileField>
  authorName?: Maybe<Scalars['String']>
  authorRole?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  quote?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Record of type Quote tile (quote_tile) */
export type QuoteTileRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by upload type */
export type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>
}

export enum ResolutionType {
  Icon = 'icon',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export type ResponsiveImage = {
  __typename?: 'ResponsiveImage'
  alt?: Maybe<Scalars['String']>
  aspectRatio: Scalars['FloatType']
  base64?: Maybe<Scalars['String']>
  bgColor?: Maybe<Scalars['String']>
  height: Scalars['IntType']
  sizes: Scalars['String']
  src: Scalars['String']
  srcSet: Scalars['String']
  title?: Maybe<Scalars['String']>
  webpSrcSet: Scalars['String']
  width: Scalars['IntType']
}

/** Record of type Rich text (rich_text) */
export type RichTextRecord = {
  __typename?: 'RichTextRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  orangeLists?: Maybe<Scalars['BooleanType']>
  text?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Record of type Rich text (rich_text) */
export type RichTextRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Rich text (rich_text) */
export type RichTextRecordTextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>
}

export type SeoField = {
  __typename?: 'SeoField'
  description?: Maybe<Scalars['String']>
  image?: Maybe<FileField>
  title?: Maybe<Scalars['String']>
  twitterCard?: Maybe<Scalars['String']>
}

export type SeoFieldMultiLocaleField = {
  __typename?: 'SeoFieldMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value?: Maybe<SeoField>
}

/** Specifies how to filter SEO meta tags fields */
export type SeoFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
}

/** Record of type Sidenote Tile (sidenote_tile) */
export type SidenoteTileRecord = {
  __typename?: 'SidenoteTileRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  text?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Record of type Sidenote Tile (sidenote_tile) */
export type SidenoteTileRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type Site = {
  __typename?: 'Site'
  favicon?: Maybe<FileField>
  faviconMetaTags: Array<Tag>
  globalSeo?: Maybe<GlobalSeoField>
  locales: Array<SiteLocale>
}

export type SiteFaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>
}

export type SiteGlobalSeoArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

export enum SiteLocale {
  En = 'en',
}

/** Specifies how to filter Slug fields */
export type SlugFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']>
  /** Filter records that have one of the specified slugs */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Filter records that do have one of the specified slugs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Specifies how to filter by status */
export type StatusFilter = {
  /** Search the record with the specified status */
  eq?: InputMaybe<ItemStatus>
  /** Exclude the record with the specified status */
  neq?: InputMaybe<ItemStatus>
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>
}

/** Specifies how to filter Single-line string fields */
export type StringFilter = {
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']>
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']>
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
}

export type StringMatchesFilter = {
  pattern: Scalars['String']
  caseSensitive?: InputMaybe<Scalars['BooleanType']>
  regexp?: InputMaybe<Scalars['BooleanType']>
}

export type StringMultiLocaleField = {
  __typename?: 'StringMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value?: Maybe<Scalars['String']>
}

/** Specifies how to filter Structured Text fields */
export type StructuredTextFilter = {
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
  /** Filter records with the specified field set as blank (null or single empty paragraph) */
  isBlank?: InputMaybe<Scalars['BooleanType']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
}

export type Tag = {
  __typename?: 'Tag'
  attributes?: Maybe<Scalars['MetaTagAttributes']>
  content?: Maybe<Scalars['String']>
  tag: Scalars['String']
}

export type TeamMemberModelFilter = {
  _createdAt?: InputMaybe<CreatedAtFilter>
  createdAt?: InputMaybe<CreatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  updatedAt?: InputMaybe<UpdatedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  workEmail?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  OR?: InputMaybe<Array<InputMaybe<TeamMemberModelFilter>>>
}

export enum TeamMemberModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  WorkEmailAsc = 'workEmail_ASC',
  WorkEmailDesc = 'workEmail_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
}

/** Record of type Team member (team_member) */
export type TeamMemberRecord = {
  __typename?: 'TeamMemberRecord'
  _allTileLocales?: Maybe<
    Array<Maybe<InteractiveImageTileRecordListListNonNullMultiLocaleField>>
  >
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  name?: Maybe<Scalars['String']>
  tile: Array<InteractiveImageTileRecord>
  updatedAt: Scalars['DateTime']
  workEmail?: Maybe<Scalars['String']>
}

/** Record of type Team member (team_member) */
export type TeamMemberRecord_AllTileLocalesArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Team member (team_member) */
export type TeamMemberRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Team member (team_member) */
export type TeamMemberRecordTileArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Team Member Tile (team_member_tile) */
export type TeamMemberTileRecord = {
  __typename?: 'TeamMemberTileRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  teamMember?: Maybe<TeamMemberRecord>
  updatedAt: Scalars['DateTime']
}

/** Record of type Team Member Tile (team_member_tile) */
export type TeamMemberTileRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type TileGridModelTilesField =
  | CaseStudyTileRecord
  | EmptyTileRecord
  | HighlightTileRecord
  | ImageTileRecord
  | InteractiveImageTileRecord
  | QuoteTileRecord
  | SidenoteTileRecord
  | TeamMemberTileRecord

/** Record of type Tile Grid (tile_grid) */
export type TileGridRecord = {
  __typename?: 'TileGridRecord'
  _createdAt: Scalars['DateTime']
  _firstPublishedAt?: Maybe<Scalars['DateTime']>
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt?: Maybe<Scalars['DateTime']>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  tiles: Array<TileGridModelTilesField>
  updatedAt: Scalars['DateTime']
}

/** Record of type Tile Grid (tile_grid) */
export type TileGridRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by upload type */
export type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<UploadType>
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<UploadType>
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<UploadType>>>
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>
}

/** Specifies how to filter by update datetime */
export type UpdatedAtFilter = {
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']>
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
}

/** Specifies how to filter by default alt */
export type UploadAltFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars['String']>
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars['String']>
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
}

/** Specifies how to filter by auhtor */
export type UploadAuthorFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
}

/** Specifies how to filter by basename */
export type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by colors */
export type UploadColorsFilter = {
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<ColorBucketType>
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
}

/** Specifies how to filter by copyright */
export type UploadCopyrightFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
}

/** Specifies how to filter by creation datetime */
export type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']>
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']>
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']>
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']>
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']>
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']>
}

/** Specifies how to filter by filename */
export type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export type UploadFilter = {
  type?: InputMaybe<TypeFilter>
  inUse?: InputMaybe<InUseFilter>
  resolution?: InputMaybe<ResolutionFilter>
  size?: InputMaybe<UploadSizeFilter>
  tags?: InputMaybe<UploadTagsFilter>
  smartTags?: InputMaybe<UploadTagsFilter>
  colors?: InputMaybe<UploadColorsFilter>
  orientation?: InputMaybe<OrientationFilter>
  id?: InputMaybe<UploadIdFilter>
  mimeType?: InputMaybe<UploadMimeTypeFilter>
  format?: InputMaybe<UploadFormatFilter>
  height?: InputMaybe<UploadHeightFilter>
  width?: InputMaybe<UploadWidthFilter>
  alt?: InputMaybe<UploadAltFilter>
  title?: InputMaybe<UploadTitleFilter>
  notes?: InputMaybe<UploadNotesFilter>
  md5?: InputMaybe<UploadMd5Filter>
  author?: InputMaybe<UploadAuthorFilter>
  copyright?: InputMaybe<UploadCopyrightFilter>
  basename?: InputMaybe<UploadBasenameFilter>
  filename?: InputMaybe<UploadFilenameFilter>
  _createdAt?: InputMaybe<UploadCreatedAtFilter>
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>
}

/** Specifies how to filter by format */
export type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars['String']>
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars['String']>
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Specifies how to filter by height */
export type UploadHeightFilter = {
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars['IntType']>
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars['IntType']>
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars['IntType']>
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars['IntType']>
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars['IntType']>
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars['IntType']>
}

/** Specifies how to filter by ID */
export type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars['UploadId']>
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars['UploadId']>
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>
}

/** Specifies how to filter by MD5 */
export type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars['String']>
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars['String']>
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Specifies how to filter by mime type */
export type UploadMimeTypeFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars['String']>
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars['String']>
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Specifies how to filter by notes */
export type UploadNotesFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
}

export enum UploadOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  ResolutionAsc = 'resolution_ASC',
  ResolutionDesc = 'resolution_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  BasenameAsc = 'basename_ASC',
  BasenameDesc = 'basename_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  FormatAsc = 'format_ASC',
  FormatDesc = 'format_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
}

export enum UploadOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
  Square = 'square',
}

/** Specifies how to filter by size */
export type UploadSizeFilter = {
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars['IntType']>
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars['IntType']>
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars['IntType']>
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars['IntType']>
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars['IntType']>
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars['IntType']>
}

/** Specifies how to filter by tags */
export type UploadTagsFilter = {
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars['String']>
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Specifies how to filter by default title */
export type UploadTitleFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars['String']>
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars['String']>
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
}

export enum UploadType {
  Image = 'image',
  Audio = 'audio',
  Video = 'video',
  Richtext = 'richtext',
  Presentation = 'presentation',
  Spreadsheet = 'spreadsheet',
  Pdfdocument = 'pdfdocument',
  Archive = 'archive',
}

/** Specifies how to filter by update datetime */
export type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']>
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']>
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']>
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']>
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']>
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']>
}

export type UploadVideoField = {
  __typename?: 'UploadVideoField'
  duration: Scalars['Int']
  framerate: Scalars['Int']
  mp4Url?: Maybe<Scalars['String']>
  muxAssetId: Scalars['String']
  muxPlaybackId: Scalars['String']
  streamingUrl: Scalars['String']
  thumbnailUrl: Scalars['String']
}

export type UploadVideoFieldMp4UrlArgs = {
  res?: InputMaybe<VideoMp4Res>
  exactRes?: InputMaybe<VideoMp4Res>
}

export type UploadVideoFieldThumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>
}

/** Specifies how to filter by width */
export type UploadWidthFilter = {
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars['IntType']>
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars['IntType']>
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars['IntType']>
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars['IntType']>
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars['IntType']>
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars['IntType']>
}

export enum VideoMp4Res {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
}

export type FocalPoint = {
  __typename?: 'focalPoint'
  x?: Maybe<Scalars['FloatType']>
  y?: Maybe<Scalars['FloatType']>
}
