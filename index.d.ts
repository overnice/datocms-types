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

export type ArticleModelContentBlocksField =
  | CallToActionRecord
  | FullWidthImageRecord
  | RichTextRecord
  | TileGridRecord

export type ArticleModelContentField = {
  __typename?: 'ArticleModelContentField'
  blocks: Array<ArticleModelContentBlocksField>
  inlineBlocks: Array<Scalars['String']>
  links: Array<Scalars['String']>
  value: Scalars['JsonField']
}

export type ArticleModelFilter = {
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
  tags?: InputMaybe<SeoFilter>
  title?: InputMaybe<StringFilter>
  slug?: InputMaybe<SlugFilter>
  excerpt?: InputMaybe<StringFilter>
  author?: InputMaybe<LinkFilter>
  content?: InputMaybe<StructuredTextFilter>
  OR?: InputMaybe<Array<InputMaybe<ArticleModelFilter>>>
  AND?: InputMaybe<Array<InputMaybe<ArticleModelFilter>>>
}

export enum ArticleModelOrderBy {
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
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
}

/** Record of type Article (article) */
export type ArticleRecord = RecordInterface & {
  __typename?: 'ArticleRecord'
  _allExcerptLocales?: Maybe<Array<StringMultiLocaleField>>
  _allTagsLocales?: Maybe<Array<SeoFieldMultiLocaleField>>
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  author?: Maybe<TeamMemberRecord>
  content?: Maybe<ArticleModelContentField>
  createdAt: Scalars['DateTime']
  excerpt?: Maybe<Scalars['String']>
  id: Scalars['ItemId']
  slug?: Maybe<Scalars['String']>
  tags?: Maybe<SeoField>
  title?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Record of type Article (article) */
export type ArticleRecord_AllExcerptLocalesArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Article (article) */
export type ArticleRecord_AllTagsLocalesArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Article (article) */
export type ArticleRecord_AllTitleLocalesArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Article (article) */
export type ArticleRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Article (article) */
export type ArticleRecordExcerptArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Article (article) */
export type ArticleRecordTagsArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Article (article) */
export type ArticleRecordTitleArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Block of type Badge List (badge_list) */
export type BadgeListRecord = RecordInterface & {
  __typename?: 'BadgeListRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  badges: Array<BadgeRecord>
  createdAt: Scalars['DateTime']
  customSpacing: Scalars['BooleanType']
  id: Scalars['ItemId']
  spacingBottom?: Maybe<Scalars['String']>
  spacingTop?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Block of type Badge List (badge_list) */
export type BadgeListRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Badge (badge) */
export type BadgeRecord = RecordInterface & {
  __typename?: 'BadgeRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  filled: Scalars['BooleanType']
  id: Scalars['ItemId']
  label?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Block of type Badge (badge) */
export type BadgeRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Block Link (block_link) */
export type BlockLinkRecord = RecordInterface & {
  __typename?: 'BlockLinkRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  caseStudy?: Maybe<CaseStudyRecord>
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  title?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Block of type Block Link (block_link) */
export type BlockLinkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Blog Listing (blog_listing) */
export type BlogListingRecord = RecordInterface & {
  __typename?: 'BlogListingRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  linkLabel?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Block of type Blog Listing (blog_listing) */
export type BlogListingRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type BlogModelAuthorsField = PersonRecord | TeamMemberRecord

export type BlogModelContentBlocksField =
  | CallToActionRecord
  | FullWidthImageRecord
  | QuoteTileRecord
  | RichTextRecord
  | SectionRecord
  | SimpleLinkRecord
  | TileGridRecord

export type BlogModelContentField = {
  __typename?: 'BlogModelContentField'
  blocks: Array<BlogModelContentBlocksField>
  inlineBlocks: Array<Scalars['String']>
  links: Array<Scalars['String']>
  value: Scalars['JsonField']
}

export type BlogModelFilter = {
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
  title?: InputMaybe<StringFilter>
  tags?: InputMaybe<SeoFilter>
  slug?: InputMaybe<SlugFilter>
  readingTime?: InputMaybe<IntegerFilter>
  publishedDate?: InputMaybe<DateFilter>
  authors?: InputMaybe<LinksFilter>
  relatedBlogs?: InputMaybe<LinksFilter>
  coverImage?: InputMaybe<FileFilter>
  content?: InputMaybe<StructuredTextFilter>
  OR?: InputMaybe<Array<InputMaybe<BlogModelFilter>>>
  AND?: InputMaybe<Array<InputMaybe<BlogModelFilter>>>
}

export enum BlogModelOrderBy {
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
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  ReadingTimeAsc = 'readingTime_ASC',
  ReadingTimeDesc = 'readingTime_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
}

/** Record of type Blog (blog) */
export type BlogRecord = RecordInterface & {
  __typename?: 'BlogRecord'
  _allTagsLocales?: Maybe<Array<SeoFieldMultiLocaleField>>
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  authors: Array<BlogModelAuthorsField>
  content?: Maybe<BlogModelContentField>
  coverImage?: Maybe<FileField>
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  publishedDate?: Maybe<Scalars['Date']>
  readingTime?: Maybe<Scalars['IntType']>
  relatedBlogs: Array<BlogRecord>
  slug?: Maybe<Scalars['String']>
  tags?: Maybe<SeoField>
  title?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Record of type Blog (blog) */
export type BlogRecord_AllTagsLocalesArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Blog (blog) */
export type BlogRecord_AllTitleLocalesArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Blog (blog) */
export type BlogRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Blog (blog) */
export type BlogRecordTagsArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Blog (blog) */
export type BlogRecordTitleArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']>
}

export type CallToActionModelLinkField = ClientRecord | TeamMemberRecord

/** Block of type Call to Action (call_to_action) */
export type CallToActionRecord = RecordInterface & {
  __typename?: 'CallToActionRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  alternativeLink: Array<SimpleLinkRecord>
  createdAt: Scalars['DateTime']
  description?: Maybe<Scalars['String']>
  id: Scalars['ItemId']
  isAlternativeLink: Scalars['BooleanType']
  link?: Maybe<CallToActionModelLinkField>
  text?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Block of type Call to Action (call_to_action) */
export type CallToActionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type CaseStudyModelContentBlocksField =
  | BlockLinkRecord
  | CallToActionRecord
  | FullWidthImageRecord
  | RichTextRecord
  | SectionRecord
  | TileGridRecord

export type CaseStudyModelContentField = {
  __typename?: 'CaseStudyModelContentField'
  blocks: Array<CaseStudyModelContentBlocksField>
  inlineBlocks: Array<Scalars['String']>
  links: Array<Scalars['String']>
  value: Scalars['JsonField']
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
  tags?: InputMaybe<SeoFilter>
  sublineTags?: InputMaybe<LinksFilter>
  client?: InputMaybe<LinkFilter>
  heroImage?: InputMaybe<FileFilter>
  highlightColor?: InputMaybe<ColorFilter>
  textColor?: InputMaybe<ColorFilter>
  backgroundColor?: InputMaybe<ColorFilter>
  date?: InputMaybe<DateFilter>
  secondHighlightColor?: InputMaybe<ColorFilter>
  content?: InputMaybe<StructuredTextFilter>
  title?: InputMaybe<StringFilter>
  abstract?: InputMaybe<TextFilter>
  projectName?: InputMaybe<StringFilter>
  slug?: InputMaybe<SlugFilter>
  OR?: InputMaybe<Array<InputMaybe<CaseStudyModelFilter>>>
  AND?: InputMaybe<Array<InputMaybe<CaseStudyModelFilter>>>
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
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  ProjectNameAsc = 'projectName_ASC',
  ProjectNameDesc = 'projectName_DESC',
}

/** Record of type Case Study (case_study) */
export type CaseStudyRecord = RecordInterface & {
  __typename?: 'CaseStudyRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  abstract?: Maybe<Scalars['String']>
  backgroundColor?: Maybe<ColorField>
  client?: Maybe<ClientRecord>
  content?: Maybe<CaseStudyModelContentField>
  createdAt: Scalars['DateTime']
  date?: Maybe<Scalars['Date']>
  heroImage?: Maybe<FileField>
  highlightColor?: Maybe<ColorField>
  id: Scalars['ItemId']
  projectName?: Maybe<Scalars['String']>
  secondHighlightColor?: Maybe<ColorField>
  slug?: Maybe<Scalars['String']>
  sublineTags: Array<CaseStudyTagRecord>
  tags?: Maybe<SeoField>
  textColor?: Maybe<ColorField>
  tile: Array<InteractiveImageTileRecord>
  title?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Record of type Case Study (case_study) */
export type CaseStudyRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Case Study (case_study) */
export type CaseStudyRecordAbstractArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>
}

export type CaseStudyTagModelFilter = {
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
  tag?: InputMaybe<StringFilter>
  OR?: InputMaybe<Array<InputMaybe<CaseStudyTagModelFilter>>>
  AND?: InputMaybe<Array<InputMaybe<CaseStudyTagModelFilter>>>
}

export enum CaseStudyTagModelOrderBy {
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
  TagAsc = 'tag_ASC',
  TagDesc = 'tag_DESC',
}

/** Record of type Case Study Tag (case_study_tag) */
export type CaseStudyTagRecord = RecordInterface & {
  __typename?: 'CaseStudyTagRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  tag?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Record of type Case Study Tag (case_study_tag) */
export type CaseStudyTagRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Case Study Tile (case_study_tile) */
export type CaseStudyTileRecord = RecordInterface & {
  __typename?: 'CaseStudyTileRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  caseStudy?: Maybe<CaseStudyRecord>
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  updatedAt: Scalars['DateTime']
}

/** Block of type Case Study Tile (case_study_tile) */
export type CaseStudyTileRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Client Grid (client_grid) */
export type ClientGridRecord = RecordInterface & {
  __typename?: 'ClientGridRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  updatedAt: Scalars['DateTime']
}

/** Block of type Client Grid (client_grid) */
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
  logo?: InputMaybe<FileFilter>
  name?: InputMaybe<StringFilter>
  excerpt?: InputMaybe<StringFilter>
  OR?: InputMaybe<Array<InputMaybe<ClientModelFilter>>>
  AND?: InputMaybe<Array<InputMaybe<ClientModelFilter>>>
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
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
}

/** Record of type Client (client) */
export type ClientRecord = RecordInterface & {
  __typename?: 'ClientRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  excerpt?: Maybe<Scalars['String']>
  id: Scalars['ItemId']
  link: Array<SimpleLinkRecord>
  logo?: Maybe<FileField>
  name?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
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
  alpha: Scalars['IntType']
  blue: Scalars['IntType']
  cssRgb: Scalars['String']
  green: Scalars['IntType']
  hex: Scalars['String']
  red: Scalars['IntType']
}

/** Specifies how to filter Color fields */
export type ColorFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
}

/** Block of type Contact Card (contact_card) */
export type ContactCardRecord = RecordInterface & {
  __typename?: 'ContactCardRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  description?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  id: Scalars['ItemId']
  title?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Block of type Contact Card (contact_card) */
export type ContactCardRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Cookie Notice (cookie_notice) */
export type CookieNoticeRecord = RecordInterface & {
  __typename?: 'CookieNoticeRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  accept?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  decline?: Maybe<Scalars['String']>
  id: Scalars['ItemId']
  linkText?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Record of type Cookie Notice (cookie_notice) */
export type CookieNoticeRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
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

/** Block of type Custom Error Page (custom_error_page) */
export type CustomErrorPageRecord = RecordInterface & {
  __typename?: 'CustomErrorPageRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  content: Array<RichTextRecord>
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  link: Array<SimpleLinkRecord>
  slug?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Block of type Custom Error Page (custom_error_page) */
export type CustomErrorPageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
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

export type DepartmentModelFilter = {
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
  name?: InputMaybe<StringFilter>
  OR?: InputMaybe<Array<InputMaybe<DepartmentModelFilter>>>
  AND?: InputMaybe<Array<InputMaybe<DepartmentModelFilter>>>
}

export enum DepartmentModelOrderBy {
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
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
}

/** Record of type Department (department) */
export type DepartmentRecord = RecordInterface & {
  __typename?: 'DepartmentRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  name?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Record of type Department (department) */
export type DepartmentRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Empty Tile (empty_tile) */
export type EmptyTileRecord = RecordInterface & {
  __typename?: 'EmptyTileRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
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

/** Block of type Empty Tile (empty_tile) */
export type EmptyTileRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Error Page (error_page) */
export type ErrorPageRecord = RecordInterface & {
  __typename?: 'ErrorPageRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  customErrorPages: Array<CustomErrorPageRecord>
  defaultErrorPage: Array<CustomErrorPageRecord>
  id: Scalars['ItemId']
  updatedAt: Scalars['DateTime']
}

/** Record of type Error Page (error_page) */
export type ErrorPageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export enum FaviconType {
  Icon = 'icon',
  AppleTouchIcon = 'appleTouchIcon',
  MsApplication = 'msApplication',
}

export type FileField = FileFieldInterface & {
  __typename?: 'FileField'
  _createdAt: Scalars['DateTime']
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']>
  _updatedAt: Scalars['DateTime']
  alt?: Maybe<Scalars['String']>
  author?: Maybe<Scalars['String']>
  basename: Scalars['String']
  blurUpThumb?: Maybe<Scalars['String']>
  blurhash?: Maybe<Scalars['String']>
  colors: Array<ColorField>
  copyright?: Maybe<Scalars['String']>
  customData: Scalars['CustomData']
  exifInfo: Scalars['CustomData']
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
  smartTags: Array<Scalars['String']>
  tags: Array<Scalars['String']>
  thumbhash?: Maybe<Scalars['String']>
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
  punch?: Scalars['Float']
  size?: Scalars['Int']
  quality?: Scalars['Int']
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

export type FileFieldInterface = {
  _createdAt: Scalars['DateTime']
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']>
  _updatedAt: Scalars['DateTime']
  alt?: Maybe<Scalars['String']>
  author?: Maybe<Scalars['String']>
  basename: Scalars['String']
  blurUpThumb?: Maybe<Scalars['String']>
  blurhash?: Maybe<Scalars['String']>
  colors: Array<ColorField>
  copyright?: Maybe<Scalars['String']>
  customData: Scalars['CustomData']
  exifInfo: Scalars['CustomData']
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
  smartTags: Array<Scalars['String']>
  tags: Array<Scalars['String']>
  thumbhash?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  url: Scalars['String']
  video?: Maybe<UploadVideoField>
  width?: Maybe<Scalars['IntType']>
}

export type FileFieldInterfaceAltArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

export type FileFieldInterfaceBlurUpThumbArgs = {
  punch?: Scalars['Float']
  size?: Scalars['Int']
  quality?: Scalars['Int']
  imgixParams?: InputMaybe<ImgixParams>
}

export type FileFieldInterfaceCustomDataArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

export type FileFieldInterfaceFocalPointArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

export type FileFieldInterfaceResponsiveImageArgs = {
  imgixParams?: InputMaybe<ImgixParams>
  sizes?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

export type FileFieldInterfaceTitleArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

export type FileFieldInterfaceUrlArgs = {
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

/** Block of type Full Width Image (full_width_image) */
export type FullWidthImageRecord = RecordInterface & {
  __typename?: 'FullWidthImageRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  image?: Maybe<FileField>
  needsBorder: Scalars['BooleanType']
  updatedAt: Scalars['DateTime']
}

/** Block of type Full Width Image (full_width_image) */
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

/** Block of type Highlight Tile (highlight_tile) */
export type HighlightTileRecord = RecordInterface & {
  __typename?: 'HighlightTileRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
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

/** Block of type Highlight Tile (highlight_tile) */
export type HighlightTileRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type HomepageModelContentBlocksField =
  | CallToActionRecord
  | FullWidthImageRecord
  | RichTextRecord
  | SectionRecord
  | TileGridRecord

export type HomepageModelContentField = {
  __typename?: 'HomepageModelContentField'
  blocks: Array<HomepageModelContentBlocksField>
  inlineBlocks: Array<Scalars['String']>
  links: Array<Scalars['String']>
  value: Scalars['JsonField']
}

/** Record of type Homepage (homepage) */
export type HomepageRecord = RecordInterface & {
  __typename?: 'HomepageRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
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
export type HomepageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Image Grid (image_grid) */
export type ImageGridRecord = RecordInterface & {
  __typename?: 'ImageGridRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  images: Array<FileField>
  updatedAt: Scalars['DateTime']
}

/** Block of type Image Grid (image_grid) */
export type ImageGridRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Image Tile (image_tile) */
export type ImageTileRecord = RecordInterface & {
  __typename?: 'ImageTileRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  colSpan?: Maybe<Scalars['IntType']>
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  image?: Maybe<FileField>
  needsBorder: Scalars['BooleanType']
  rowSpan?: Maybe<Scalars['IntType']>
  updatedAt: Scalars['DateTime']
}

/** Block of type Image Tile (image_tile) */
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
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/aspect-ratio)
   */
  ar?: InputMaybe<Scalars['String']>
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/automatic)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>
  /**
   * Background Removal Fallback
   *
   * Overrides default fallback behavior for bg-remove failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-fallback)
   */
  bgRemoveFallback?: InputMaybe<Scalars['BooleanType']>
  /**
   * Background Removal Foreground Type
   *
   * Specifies the image foreground type for background removal.
   *
   * Depends on: `bg-remove=true`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-foreground-type)
   */
  bgRemoveFgType?: InputMaybe<Array<ImgixParamsBgRemoveFgType>>
  /**
   * Background Removal Semi Transparency
   *
   * Enables background removal while retaining semi-transparent areas.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-semi-transparency)
   */
  bgRemoveSemiTransparency?: InputMaybe<Scalars['BooleanType']>
  /**
   * Background Removal
   *
   * Removes background from image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal)
   */
  bgRemove?: InputMaybe<Scalars['BooleanType']>
  /**
   * Background Replace Fallback
   *
   * Overrides default fallback behavior for bg-replace failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replace-fallback)
   */
  bgReplaceFallback?: InputMaybe<Scalars['BooleanType']>
  /**
   * Background Replacement Negative Prompt
   *
   * Provides a negative text suggestion for background replacement.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replacement-negative-prompt)
   */
  bgReplaceNegPrompt?: InputMaybe<Scalars['String']>
  /**
   * Background Replacement
   *
   * Replaces background from image using a string based prompt.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replacement)
   */
  bgReplace?: InputMaybe<Scalars['String']>
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/background-color)
   */
  bg?: InputMaybe<Scalars['String']>
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars['IntType']>
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars['String']>
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-height)
   */
  blendH?: InputMaybe<Scalars['FloatType']>
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-padding)
   */
  blendPad?: InputMaybe<Scalars['IntType']>
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-width)
   */
  blendW?: InputMaybe<Scalars['FloatType']>
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-x-position)
   */
  blendX?: InputMaybe<Scalars['IntType']>
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-y-position)
   */
  blendY?: InputMaybe<Scalars['IntType']>
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend)
   */
  blend?: InputMaybe<Scalars['String']>
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/gaussian-blur)
   */
  blur?: InputMaybe<Scalars['IntType']>
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars['IntType']>
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars['IntType']>
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/inner-border-radius)
   */
  borderRadiusInner?: InputMaybe<Scalars['String']>
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/outer-border-radius)
   */
  borderRadius?: InputMaybe<Scalars['String']>
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars['IntType']>
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars['IntType']>
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size)
   */
  border?: InputMaybe<Scalars['String']>
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/brightness)
   */
  bri?: InputMaybe<Scalars['IntType']>
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/client-hints)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/chroma-subsampling)
   */
  chromasub?: InputMaybe<Scalars['IntType']>
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/color-quantization)
   */
  colorquant?: InputMaybe<Scalars['IntType']>
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/palette-color-count)
   */
  colors?: InputMaybe<Scalars['IntType']>
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/contrast)
   */
  con?: InputMaybe<Scalars['IntType']>
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars['String']>
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/crop-mode)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/color-space)
   */
  cs?: InputMaybe<ImgixParamsCs>
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/download)
   */
  dl?: InputMaybe<Scalars['String']>
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/dots-per-inch)
   */
  dpi?: InputMaybe<Scalars['IntType']>
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/device-pixel-ratio)
   */
  dpr?: InputMaybe<Scalars['FloatType']>
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars['IntType']>
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars['String']>
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/exposure)
   */
  exp?: InputMaybe<Scalars['IntType']>
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/expiration)
   */
  expires?: InputMaybe<Scalars['IntType']>
  /**
   * Face Blur
   *
   * Specifies the amount of blur to apply to detected faces. Defaults to 0.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-blur)
   */
  faceBlur?: InputMaybe<Scalars['IntType']>
  /**
   * Face Pixelation
   *
   * Specifies the pixelation amount of the face.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-pixelation)
   */
  facePixel?: InputMaybe<Scalars['IntType']>
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-index)
   */
  faceindex?: InputMaybe<Scalars['IntType']>
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-padding)
   */
  facepad?: InputMaybe<Scalars['FloatType']>
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/json-face-data)
   */
  faces?: InputMaybe<Scalars['IntType']>
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars['String']>
  /**
   * Fill Generative Fallback
   *
   * Sets the fallback behavior for generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-fallback)
   */
  fillGenFallback?: InputMaybe<Scalars['BooleanType']>
  /**
   * Fill Generative Negative Prompt
   *
   * Provides a negative text suggestion to the generative fill parameter. Used to reduce the probability of a subject, detail, or object appearing in generative output.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-negative-prompt)
   */
  fillGenNegPrompt?: InputMaybe<Scalars['String']>
  /**
   * Fill Generative Position
   *
   * Sets the position of the Origin Image in relation to the generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-position)
   */
  fillGenPos?: InputMaybe<Array<ImgixParamsFillGenPos>>
  /**
   * Fill Generative Prompt
   *
   * Provides a text suggestion to the generative fill parameter.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-prompt)
   */
  fillGenPrompt?: InputMaybe<Scalars['String']>
  /**
   * Fill Generative Seed
   *
   * Sets the generative seed value. Used to generate similar outputs from different prompts.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-seed)
   */
  fillGenSeed?: InputMaybe<Scalars['IntType']>
  /**
   * Fill Gradient Color Space
   *
   * Defines the color space as linear, sRGB, Oklab, HSL, or LCH for gradient color interpolation
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-color-space)
   */
  fillGradientCs?: InputMaybe<ImgixParamsFillGradientCs>
  /**
   * Fill Gradient Linear Direction
   *
   * The fill-gradient-linear-direction specifies the gradient's direction, flowing towards the bottom, top, right, or left
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-linear-direction)
   */
  fillGradientLinearDirection?: InputMaybe<
    Array<ImgixParamsFillGradientLinearDirection>
  >
  /**
   * Fill Gradient Linear
   *
   * Blends a gradient between two colors, {color1} and {color2}, along a straight path
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-linear)
   */
  fillGradientLinear?: InputMaybe<Scalars['String']>
  /**
   * Fill Gradient Radial Radius
   *
   * Parameter defines the radial gradient's radius as pixels or a percentage (0.0-1.0) of the image's smallest dimension
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-radius)
   */
  fillGradientRadialRadius?: InputMaybe<Scalars['String']>
  /**
   * Fill Gradient Radial X
   *
   * Specifies the location of the radial gradient's center along the x-axis, using either a pixel value or a floating point percentage (ranging from 0.0 to 1.0) of the image's width
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-x)
   */
  fillGradientRadialX?: InputMaybe<Scalars['FloatType']>
  /**
   * Fill Gradient Radial Y
   *
   * Parameter sets the radial gradient's center on the y-axis, using pixels or a 0.0 to 1.0 percentage of the image's height
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-y)
   */
  fillGradientRadialY?: InputMaybe<Scalars['FloatType']>
  /**
   * Fill Gradient Radial
   *
   * The fill-gradient-radial parameter creates a circular gradient transitioning from a central color (Color1) to an outer color (Color2)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial)
   */
  fillGradientRadial?: InputMaybe<Scalars['String']>
  /**
   * Fill Gradient Type
   *
   * Specifies if a gradient is radial (circular) or linear (straight)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-type)
   */
  fillGradientType?: InputMaybe<ImgixParamsFillGradientType>
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-mode)
   */
  fill?: InputMaybe<ImgixParamsFill>
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/resize-fit-mode)
   */
  fit?: InputMaybe<ImgixParamsFit>
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/flip-axis)
   */
  flip?: InputMaybe<ImgixParamsFlip>
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/output-format)
   */
  fm?: InputMaybe<ImgixParamsFm>
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-debug)
   */
  fpDebug?: InputMaybe<Scalars['BooleanType']>
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-x-position)
   */
  fpX?: InputMaybe<Scalars['FloatType']>
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-y-position)
   */
  fpY?: InputMaybe<Scalars['FloatType']>
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-zoom)
   */
  fpZ?: InputMaybe<Scalars['FloatType']>
  /**
   * Frames Per Second
   *
   * Specifies the framerate of the generated image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frames-per-second)
   */
  fps?: InputMaybe<Scalars['IntType']>
  /**
   * Frame Selection
   *
   * Specifies the frame of an animated image to use.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-selection)
   */
  frame?: InputMaybe<Scalars['String']>
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/gamma)
   */
  gam?: InputMaybe<Scalars['IntType']>
  /**
   * Animated Gif Quality
   *
   * Specifies the quality of the animated gif. The higher the value, the better more compression is applied.
   *
   * Depends on: `fm=gif`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/animated-gif-quality)
   */
  gifQ?: InputMaybe<Scalars['IntType']>
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/grid-colors)
   */
  gridColors?: InputMaybe<Scalars['String']>
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/grid-size)
   */
  gridSize?: InputMaybe<Scalars['IntType']>
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/image-height)
   */
  h?: InputMaybe<Scalars['FloatType']>
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/highlight)
   */
  high?: InputMaybe<Scalars['IntType']>
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/halftone)
   */
  htn?: InputMaybe<Scalars['IntType']>
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/hue-shift)
   */
  hue?: InputMaybe<Scalars['IntType']>
  /**
   * Frame Interval
   *
   * Displays every Nth frame starting with the first frame.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-interval)
   */
  interval?: InputMaybe<Scalars['IntType']>
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/invert)
   */
  invert?: InputMaybe<Scalars['BooleanType']>
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/iptc-passthrough)
   */
  iptc?: InputMaybe<ImgixParamsIptc>
  /**
   * Jpg Progressive
   *
   * Specifies whether or not a jpg/jpeg uses progressive (true) or baseline (false)
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/jpg-progressive)
   */
  jpgProgressive?: InputMaybe<Scalars['BooleanType']>
  /**
   * License Plate Blur
   *
   * Specifies the amount of blur to apply to detected license plates. Defaults to 0.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/license-plate-detection/license-plate-blur)
   */
  lpBlur?: InputMaybe<Scalars['IntType']>
  /**
   * Animation Loop Count
   *
   * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation)
   */
  loop?: InputMaybe<Scalars['IntType']>
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/lossless-compression)
   */
  lossless?: InputMaybe<Scalars['BooleanType']>
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-alignment-mode)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-alpha)
   */
  markAlpha?: InputMaybe<Scalars['IntType']>
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-base-url)
   */
  markBase?: InputMaybe<Scalars['String']>
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-fit-mode)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-height)
   */
  markH?: InputMaybe<Scalars['FloatType']>
  /**
   * Watermark If Minimum Height
   *
   * Displays the watermark if rendered base image pixel height is equal to or larger than the supplied value
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-if-minimum-height)
   */
  markIfMinHeight?: InputMaybe<Scalars['IntType']>
  /**
   * Watermark If Minimum Width
   *
   * Displays the watermark if rendered base image pixel width is equal to or larger than the supplied value
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-if-minimum-width)
   */
  markIfMinWidth?: InputMaybe<Scalars['IntType']>
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-padding)
   */
  markPad?: InputMaybe<Scalars['IntType']>
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-rotation)
   */
  markRot?: InputMaybe<Scalars['FloatType']>
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-scale)
   */
  markScale?: InputMaybe<Scalars['IntType']>
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-width)
   */
  markW?: InputMaybe<Scalars['FloatType']>
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-x-position)
   */
  markX?: InputMaybe<Scalars['IntType']>
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-y-position)
   */
  markY?: InputMaybe<Scalars['IntType']>
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-image-url)
   */
  mark?: InputMaybe<Scalars['String']>
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-background-color)
   */
  maskBg?: InputMaybe<Scalars['String']>
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-type)
   */
  mask?: InputMaybe<Scalars['String']>
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/maximum-height)
   */
  maxH?: InputMaybe<Scalars['IntType']>
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/maximum-width)
   */
  maxW?: InputMaybe<Scalars['IntType']>
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/minimum-height)
   */
  minH?: InputMaybe<Scalars['IntType']>
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/minimum-width)
   */
  minW?: InputMaybe<Scalars['IntType']>
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars['String']>
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/noise-reduction/noise-reduction-bound)
   */
  nr?: InputMaybe<Scalars['IntType']>
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/noise-reduction/noise-reduction-sharpen)
   */
  nrs?: InputMaybe<Scalars['IntType']>
  /**
   * Object Removal Negative Prompt
   *
   * Provides a negative text suggestion to object-removal-prompt. Used to reduce the probability of a subject, detail, or object appearing in generative output.
   *
   * Depends on: `object-removal-rect`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-negative-prompt)
   */
  objectRemovalNegativePrompt?: InputMaybe<Scalars['String']>
  /**
   * Object Removal Prompt
   *
   * Suggest auto generative fill for the object-removal-rect parameter
   *
   * Depends on: `object-removal-rect`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-prompt)
   */
  objectRemovalPrompt?: InputMaybe<Scalars['String']>
  /**
   * Object Removal
   *
   * Using a specified rectangle, an object is removed from the image
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal)
   */
  objectRemovalRect?: InputMaybe<Scalars['String']>
  /**
   * Object Removal Seed
   *
   * Sets the generative seed value for object-removal. Used to generate new outputs from the same prompt
   *
   * Depends on: `object-removal-rect`, `object-removal-prompt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-seed)
   */
  objectRemovalSeed?: InputMaybe<Scalars['IntType']>
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/orientation)
   */
  orient?: InputMaybe<Scalars['IntType']>
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-bottom)
   */
  padBottom?: InputMaybe<Scalars['IntType']>
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-left)
   */
  padLeft?: InputMaybe<Scalars['IntType']>
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-right)
   */
  padRight?: InputMaybe<Scalars['IntType']>
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-top)
   */
  padTop?: InputMaybe<Scalars['IntType']>
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding)
   */
  pad?: InputMaybe<Scalars['IntType']>
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/pdf/pdf-page-number)
   */
  page?: InputMaybe<Scalars['IntType']>
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/color-palette-extraction)
   */
  palette?: InputMaybe<ImgixParamsPalette>
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']>
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/css-prefix)
   */
  prefix?: InputMaybe<Scalars['String']>
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/pixellate)
   */
  px?: InputMaybe<Scalars['IntType']>
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=avif`, `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/output-quality)
   */
  q?: InputMaybe<Scalars['IntType']>
  /**
   * Rasterize Bypass
   *
   * Bypasses all rendering parameters (including default parameters) and serves the original image. Works for svg+xml,x-eps,pdf, and vnd.adobe.illustrator.
   */
  rasterizeBypass?: InputMaybe<Scalars['BooleanType']>
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/source-rectangle-region)
   */
  rect?: InputMaybe<Scalars['String']>
  /**
   * Reverse
   *
   * Reverses the frame order on the source animation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/reverse)
   */
  reverse?: InputMaybe<Scalars['BooleanType']>
  /**
   * Rotation Type
   *
   * Changes the rotation type.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/rotation-type)
   */
  rotType?: InputMaybe<ImgixParamsRotType>
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/rotation)
   */
  rot?: InputMaybe<Scalars['FloatType']>
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/saturation)
   */
  sat?: InputMaybe<Scalars['IntType']>
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/sepia-tone)
   */
  sepia?: InputMaybe<Scalars['IntType']>
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/shadow)
   */
  shad?: InputMaybe<Scalars['FloatType']>
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/sharpen)
   */
  sharp?: InputMaybe<Scalars['FloatType']>
  /**
   * Frame Skip
   *
   * Skips every Nth frame starting with the first frame.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-skip)
   */
  skip?: InputMaybe<Scalars['IntType']>
  /**
   * Sanitize Svg
   *
   * Specifies whether to sanitize an SVG.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/sanitize-svg)
   */
  svgSanitize?: InputMaybe<Scalars['BooleanType']>
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>
  /**
   * Trim Alpha
   *
   * Specifies a trim alpha on a trim operation.
   *
   * Depends on: `trim=alpha`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-alpha)
   */
  trimAlpha?: InputMaybe<Scalars['FloatType']>
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars['String']>
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-mean-difference)
   */
  trimMd?: InputMaybe<Scalars['FloatType']>
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-padding)
   */
  trimPad?: InputMaybe<Scalars['IntType']>
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-standard-deviation)
   */
  trimSd?: InputMaybe<Scalars['FloatType']>
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-tolerance)
   */
  trimTol?: InputMaybe<Scalars['FloatType']>
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-image)
   */
  trim?: InputMaybe<ImgixParamsTrim>
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-clipping-mode)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-color)
   */
  txtColor?: InputMaybe<Scalars['String']>
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-fit-mode)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-font)
   */
  txtFont?: InputMaybe<Scalars['String']>
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/typesetting-endpoint/text-leading)
   */
  txtLead?: InputMaybe<Scalars['IntType']>
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-outline-color)
   */
  txtLineColor?: InputMaybe<Scalars['String']>
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-outline)
   */
  txtLine?: InputMaybe<Scalars['IntType']>
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-padding)
   */
  txtPad?: InputMaybe<Scalars['IntType']>
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-shadow)
   */
  txtShad?: InputMaybe<Scalars['FloatType']>
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-font-size)
   */
  txtSize?: InputMaybe<Scalars['IntType']>
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/typesetting-endpoint/text-tracking)
   */
  txtTrack?: InputMaybe<Scalars['IntType']>
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-width)
   */
  txtWidth?: InputMaybe<Scalars['IntType']>
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-x-position)
   */
  txtX?: InputMaybe<Scalars['IntType']>
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-y-position)
   */
  txtY?: InputMaybe<Scalars['IntType']>
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-string)
   */
  txt?: InputMaybe<Scalars['String']>
  /**
   * Super Resolution Fallback
   *
   * Overrides default fallback behavior for super resolution failures
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution)
   */
  upscaleFallback?: InputMaybe<Scalars['BooleanType']>
  /**
   * Super Resolution
   *
   * Uses generative AI fill to upscale low resolution images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution)
   */
  upscale?: InputMaybe<Scalars['BooleanType']>
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/unsharp-mask)
   */
  usm?: InputMaybe<Scalars['IntType']>
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/unsharp-mask-radius)
   */
  usmrad?: InputMaybe<Scalars['FloatType']>
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/vibrance)
   */
  vib?: InputMaybe<Scalars['IntType']>
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/image-width)
   */
  w?: InputMaybe<Scalars['FloatType']>
  /**
   * Bypasses any [DatoCMS Automatic Image Optimization](https://www.datocms.com/docs/cdn-settings/advanced-asset-settings) that might be set up for the project.
   *
   * Exercise caution when using this parameter, as it could significantly increase your bandwidth costs.
   */
  skipDefaultOptimizations?: InputMaybe<Scalars['BooleanType']>
}

export enum ImgixParamsAuto {
  Enhance = 'enhance',
  Format = 'format',
  Redeye = 'redeye',
  Compress = 'compress',
}

export enum ImgixParamsBgRemoveFgType {
  Auto = 'auto',
  Car = 'car',
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
  Origin = 'origin',
  Srgb = 'srgb',
  Adobergb1998 = 'adobergb1998',
  Tinysrgb = 'tinysrgb',
  Strip = 'strip',
}

export enum ImgixParamsFill {
  Solid = 'solid',
  Blur = 'blur',
  Gen = 'gen',
  Generative = 'generative',
  Gradient = 'gradient',
}

export enum ImgixParamsFillGenPos {
  Top = 'top',
  Bottom = 'bottom',
  Middle = 'middle',
  Left = 'left',
  Right = 'right',
  Center = 'center',
}

export enum ImgixParamsFillGradientCs {
  Linear = 'linear',
  Srgb = 'srgb',
  Oklab = 'oklab',
  Hsl = 'hsl',
  Lch = 'lch',
}

export enum ImgixParamsFillGradientLinearDirection {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
}

export enum ImgixParamsFillGradientType {
  Linear = 'linear',
  Radial = 'radial',
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

export enum ImgixParamsRotType {
  Pivot = 'pivot',
  Straighten = 'straighten',
}

export enum ImgixParamsTransparency {
  Grid = 'grid',
}

export enum ImgixParamsTrim {
  Auto = 'auto',
  Color = 'color',
  Alpha = 'alpha',
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

/** Specifies how to filter Integer fields */
export type IntegerFilter = {
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']>
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']>
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']>
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']>
}

/** Block of type Interactive Image Tile (interactive_image_tile) */
export type InteractiveImageTileRecord = RecordInterface & {
  __typename?: 'InteractiveImageTileRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  colSpan?: Maybe<Scalars['IntType']>
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  image?: Maybe<FileField>
  isLink: Scalars['BooleanType']
  label?: Maybe<Scalars['String']>
  labelBackgroundColor?: Maybe<ColorField>
  labelTextColor?: Maybe<ColorField>
  link: Array<SimpleLinkRecord>
  needsBorder: Scalars['BooleanType']
  rowSpan?: Maybe<Scalars['IntType']>
  updatedAt: Scalars['DateTime']
}

/** Block of type Interactive Image Tile (interactive_image_tile) */
export type InteractiveImageTileRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
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

/** Block of type Job Listing (job_listing) */
export type JobListingRecord = RecordInterface & {
  __typename?: 'JobListingRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  linkLabel?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Block of type Job Listing (job_listing) */
export type JobListingRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type JobModelContentBlocksField =
  | CallToActionRecord
  | FullWidthImageRecord
  | RichTextRecord
  | TileGridRecord

export type JobModelContentField = {
  __typename?: 'JobModelContentField'
  blocks: Array<JobModelContentBlocksField>
  inlineBlocks: Array<Scalars['String']>
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
  startDate?: InputMaybe<DateFilter>
  tags?: InputMaybe<SeoFilter>
  content?: InputMaybe<StructuredTextFilter>
  title?: InputMaybe<StringFilter>
  excerpt?: InputMaybe<StringFilter>
  slug?: InputMaybe<SlugFilter>
  OR?: InputMaybe<Array<InputMaybe<JobModelFilter>>>
  AND?: InputMaybe<Array<InputMaybe<JobModelFilter>>>
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
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
}

/** Record of type Job (job) */
export type JobRecord = RecordInterface & {
  __typename?: 'JobRecord'
  _allExcerptLocales?: Maybe<Array<StringMultiLocaleField>>
  _allTagsLocales?: Maybe<Array<SeoFieldMultiLocaleField>>
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
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

/** Specifies how to filter Single-link fields */
export type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']>
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: InputMaybe<Scalars['ItemId']>
  /** Filter records linked to one of the specified records */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>
  /** Filter records not linked to one of the specified records */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
}

/** Specifies how to filter Multiple-links fields */
export type LinksFilter = {
  /** Search for records with an exact match. The specified values must be Record IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>
  /** Filter records linked to all of the specified records. The specified values must be Record IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>
  /** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>
  /** Filter records not linked to any of the specified records. The specified values must be Record IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>
}

export type LogoTileGridModelTilesField =
  | EmptyTileRecord
  | InteractiveImageTileRecord
  | LogoTileRecord

/** Block of type Logo Tile Grid (logo_tile_grid) */
export type LogoTileGridRecord = RecordInterface & {
  __typename?: 'LogoTileGridRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  tiles: Array<LogoTileGridModelTilesField>
  updatedAt: Scalars['DateTime']
}

/** Block of type Logo Tile Grid (logo_tile_grid) */
export type LogoTileGridRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Logo Tile (logo_tile) */
export type LogoTileRecord = RecordInterface & {
  __typename?: 'LogoTileRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  logo?: Maybe<FileField>
  title?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Block of type Logo Tile (logo_tile) */
export type LogoTileRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Logos with Caption Tile (logos_with_caption_tile) */
export type LogosWithCaptionTileRecord = RecordInterface & {
  __typename?: 'LogosWithCaptionTileRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  logo: Array<FileField>
  title?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Block of type Logos with Caption Tile (logos_with_caption_tile) */
export type LogosWithCaptionTileRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export enum MuxThumbnailFormatType {
  Jpg = 'jpg',
  Png = 'png',
  Gif = 'gif',
}

/** Record of type Navigation (navigation) */
export type NavigationRecord = RecordInterface & {
  __typename?: 'NavigationRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  ctaText?: Maybe<Scalars['String']>
  footerCtaLink: Array<SimpleLinkRecord>
  footnote?: Maybe<Scalars['String']>
  headerCtaLink: Array<SimpleLinkRecord>
  id: Scalars['ItemId']
  instagramText?: Maybe<Scalars['String']>
  instagramUrl?: Maybe<Scalars['String']>
  legalPages: Array<PageRecord>
  mainPages: Array<PageRecord>
  shopUrl?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Record of type Navigation (navigation) */
export type NavigationRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by image orientation */
export type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>
}

/** Block of type Package Card (package_card) */
export type PackageCardRecord = RecordInterface & {
  __typename?: 'PackageCardRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  accentColor?: Maybe<Scalars['String']>
  cost?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  description?: Maybe<Scalars['String']>
  id: Scalars['ItemId']
  paymentType?: Maybe<Scalars['String']>
  timeframe?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Block of type Package Card (package_card) */
export type PackageCardRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Package Card (package_card) */
export type PackageCardRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>
}

/** Block of type Package List (package_list) */
export type PackageListRecord = RecordInterface & {
  __typename?: 'PackageListRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  updatedAt: Scalars['DateTime']
}

/** Block of type Package List (package_list) */
export type PackageListRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type PackageModelContentBlocksField =
  | CallToActionRecord
  | FullWidthImageRecord
  | PackageTimelineRecord
  | RichTextRecord
  | SectionRecord
  | TileGridRecord

export type PackageModelContentField = {
  __typename?: 'PackageModelContentField'
  blocks: Array<PackageModelContentBlocksField>
  inlineBlocks: Array<Scalars['String']>
  links: Array<Scalars['String']>
  value: Scalars['JsonField']
}

export type PackageModelFilter = {
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
  tags?: InputMaybe<SeoFilter>
  content?: InputMaybe<StructuredTextFilter>
  highlightColor?: InputMaybe<ColorFilter>
  slug?: InputMaybe<SlugFilter>
  packageType?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
  excerpt?: InputMaybe<StringFilter>
  timeframe?: InputMaybe<StringFilter>
  cost?: InputMaybe<StringFilter>
  OR?: InputMaybe<Array<InputMaybe<PackageModelFilter>>>
  AND?: InputMaybe<Array<InputMaybe<PackageModelFilter>>>
}

export enum PackageModelOrderBy {
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
  PackageTypeAsc = 'packageType_ASC',
  PackageTypeDesc = 'packageType_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  TimeframeAsc = 'timeframe_ASC',
  TimeframeDesc = 'timeframe_DESC',
  CostAsc = 'cost_ASC',
  CostDesc = 'cost_DESC',
}

/** Record of type Package (package) */
export type PackageRecord = RecordInterface & {
  __typename?: 'PackageRecord'
  _allCostLocales?: Maybe<Array<StringMultiLocaleField>>
  _allExcerptLocales?: Maybe<Array<StringMultiLocaleField>>
  _allPackageTypeLocales?: Maybe<Array<StringMultiLocaleField>>
  _allTagsLocales?: Maybe<Array<SeoFieldMultiLocaleField>>
  _allTimeframeLocales?: Maybe<Array<StringMultiLocaleField>>
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  content?: Maybe<PackageModelContentField>
  cost?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  excerpt?: Maybe<Scalars['String']>
  highlightColor?: Maybe<ColorField>
  id: Scalars['ItemId']
  packageType?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  tags?: Maybe<SeoField>
  timeframe?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Record of type Package (package) */
export type PackageRecord_AllCostLocalesArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Package (package) */
export type PackageRecord_AllExcerptLocalesArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Package (package) */
export type PackageRecord_AllPackageTypeLocalesArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Package (package) */
export type PackageRecord_AllTagsLocalesArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Package (package) */
export type PackageRecord_AllTimeframeLocalesArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Package (package) */
export type PackageRecord_AllTitleLocalesArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Package (package) */
export type PackageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Package (package) */
export type PackageRecordCostArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Package (package) */
export type PackageRecordExcerptArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Package (package) */
export type PackageRecordPackageTypeArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Package (package) */
export type PackageRecordTagsArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Package (package) */
export type PackageRecordTimeframeArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Package (package) */
export type PackageRecordTitleArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Block of type Package Timeline (package_timeline) */
export type PackageTimelineRecord = RecordInterface & {
  __typename?: 'PackageTimelineRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  columns: Array<TimelineColumnRecord>
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  items: Array<TimelineItemRecord>
  updatedAt: Scalars['DateTime']
}

/** Block of type Package Timeline (package_timeline) */
export type PackageTimelineRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type PageModelContentBlocksField =
  | BlogListingRecord
  | CallToActionRecord
  | ClientGridRecord
  | FullWidthImageRecord
  | JobListingRecord
  | LogoTileGridRecord
  | RichTextRecord
  | SectionRecord
  | TeamMembersGridRecord
  | TileGridRecord

export type PageModelContentField = {
  __typename?: 'PageModelContentField'
  blocks: Array<PageModelContentBlocksField>
  inlineBlocks: Array<Scalars['String']>
  links: Array<Scalars['String']>
  value: Scalars['JsonField']
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
  tags?: InputMaybe<SeoFilter>
  content?: InputMaybe<StructuredTextFilter>
  title?: InputMaybe<StringFilter>
  pageName?: InputMaybe<StringFilter>
  slug?: InputMaybe<SlugFilter>
  OR?: InputMaybe<Array<InputMaybe<PageModelFilter>>>
  AND?: InputMaybe<Array<InputMaybe<PageModelFilter>>>
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
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
}

/** Record of type Page (page) */
export type PageRecord = RecordInterface & {
  __typename?: 'PageRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
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
export type PageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type PersonModelFilter = {
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
  photo?: InputMaybe<FileFilter>
  name?: InputMaybe<StringFilter>
  role?: InputMaybe<StringFilter>
  OR?: InputMaybe<Array<InputMaybe<PersonModelFilter>>>
  AND?: InputMaybe<Array<InputMaybe<PersonModelFilter>>>
}

export enum PersonModelOrderBy {
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
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
}

/** Record of type Person (person) */
export type PersonRecord = RecordInterface & {
  __typename?: 'PersonRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  name?: Maybe<Scalars['String']>
  photo?: Maybe<FileField>
  role?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Record of type Person (person) */
export type PersonRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
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
  _allArticlesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allBlogsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allCaseStudiesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allCaseStudyTagsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allClientsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allDepartmentsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allJobsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allPackagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allPagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allPeopleMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allTeamMembersMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allTestsMeta: CollectionMetadata
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: CollectionMetadata
  /** Returns the single instance record */
  _site: Site
  /** Returns a collection of records */
  allArticles: Array<ArticleRecord>
  /** Returns a collection of records */
  allBlogs: Array<BlogRecord>
  /** Returns a collection of records */
  allCaseStudies: Array<CaseStudyRecord>
  /** Returns a collection of records */
  allCaseStudyTags: Array<CaseStudyTagRecord>
  /** Returns a collection of records */
  allClients: Array<ClientRecord>
  /** Returns a collection of records */
  allDepartments: Array<DepartmentRecord>
  /** Returns a collection of records */
  allJobs: Array<JobRecord>
  /** Returns a collection of records */
  allPackages: Array<PackageRecord>
  /** Returns a collection of records */
  allPages: Array<PageRecord>
  /** Returns a collection of records */
  allPeople: Array<PersonRecord>
  /** Returns a collection of records */
  allTeamMembers: Array<TeamMemberRecord>
  /** Returns a collection of records */
  allTests: Array<TestRecord>
  /** Returns a collection of assets */
  allUploads: Array<FileField>
  /** Returns a specific record */
  article?: Maybe<ArticleRecord>
  /** Returns a specific record */
  blog?: Maybe<BlogRecord>
  /** Returns a specific record */
  caseStudy?: Maybe<CaseStudyRecord>
  /** Returns a specific record */
  caseStudyTag?: Maybe<CaseStudyTagRecord>
  /** Returns a specific record */
  client?: Maybe<ClientRecord>
  /** Returns the single instance record */
  cookieNotice?: Maybe<CookieNoticeRecord>
  /** Returns a specific record */
  department?: Maybe<DepartmentRecord>
  /** Returns the single instance record */
  errorPage?: Maybe<ErrorPageRecord>
  /** Returns the single instance record */
  homepage?: Maybe<HomepageRecord>
  /** Returns a specific record */
  job?: Maybe<JobRecord>
  /** Returns the single instance record */
  navigation?: Maybe<NavigationRecord>
  /** Returns a specific record */
  package?: Maybe<PackageRecord>
  /** Returns a specific record */
  page?: Maybe<PageRecord>
  /** Returns a specific record */
  person?: Maybe<PersonRecord>
  /** Returns a specific record */
  teamMember?: Maybe<TeamMemberRecord>
  /** Returns a specific record */
  test?: Maybe<TestRecord>
  /** Returns a specific asset */
  upload?: Maybe<FileField>
}

/** The query root for this schema */
export type Query_AllArticlesMetaArgs = {
  locale?: InputMaybe<SiteLocale>
  filter?: InputMaybe<ArticleModelFilter>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** The query root for this schema */
export type Query_AllBlogsMetaArgs = {
  locale?: InputMaybe<SiteLocale>
  filter?: InputMaybe<BlogModelFilter>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** The query root for this schema */
export type Query_AllCaseStudiesMetaArgs = {
  locale?: InputMaybe<SiteLocale>
  filter?: InputMaybe<CaseStudyModelFilter>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** The query root for this schema */
export type Query_AllCaseStudyTagsMetaArgs = {
  locale?: InputMaybe<SiteLocale>
  filter?: InputMaybe<CaseStudyTagModelFilter>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** The query root for this schema */
export type Query_AllClientsMetaArgs = {
  locale?: InputMaybe<SiteLocale>
  filter?: InputMaybe<ClientModelFilter>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** The query root for this schema */
export type Query_AllDepartmentsMetaArgs = {
  locale?: InputMaybe<SiteLocale>
  filter?: InputMaybe<DepartmentModelFilter>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** The query root for this schema */
export type Query_AllJobsMetaArgs = {
  locale?: InputMaybe<SiteLocale>
  filter?: InputMaybe<JobModelFilter>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** The query root for this schema */
export type Query_AllPackagesMetaArgs = {
  locale?: InputMaybe<SiteLocale>
  filter?: InputMaybe<PackageModelFilter>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** The query root for this schema */
export type Query_AllPagesMetaArgs = {
  locale?: InputMaybe<SiteLocale>
  filter?: InputMaybe<PageModelFilter>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** The query root for this schema */
export type Query_AllPeopleMetaArgs = {
  locale?: InputMaybe<SiteLocale>
  filter?: InputMaybe<PersonModelFilter>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** The query root for this schema */
export type Query_AllTeamMembersMetaArgs = {
  locale?: InputMaybe<SiteLocale>
  filter?: InputMaybe<TeamMemberModelFilter>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** The query root for this schema */
export type Query_AllTestsMetaArgs = {
  locale?: InputMaybe<SiteLocale>
  filter?: InputMaybe<TestModelFilter>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
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
export type QueryAllArticlesArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  skip?: InputMaybe<Scalars['IntType']>
  first?: InputMaybe<Scalars['IntType']>
  filter?: InputMaybe<ArticleModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<ArticleModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllBlogsArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  skip?: InputMaybe<Scalars['IntType']>
  first?: InputMaybe<Scalars['IntType']>
  filter?: InputMaybe<BlogModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<BlogModelOrderBy>>>
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
export type QueryAllCaseStudyTagsArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  skip?: InputMaybe<Scalars['IntType']>
  first?: InputMaybe<Scalars['IntType']>
  filter?: InputMaybe<CaseStudyTagModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<CaseStudyTagModelOrderBy>>>
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
export type QueryAllDepartmentsArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  skip?: InputMaybe<Scalars['IntType']>
  first?: InputMaybe<Scalars['IntType']>
  filter?: InputMaybe<DepartmentModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<DepartmentModelOrderBy>>>
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
export type QueryAllPackagesArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  skip?: InputMaybe<Scalars['IntType']>
  first?: InputMaybe<Scalars['IntType']>
  filter?: InputMaybe<PackageModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<PackageModelOrderBy>>>
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
export type QueryAllPeopleArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  skip?: InputMaybe<Scalars['IntType']>
  first?: InputMaybe<Scalars['IntType']>
  filter?: InputMaybe<PersonModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<PersonModelOrderBy>>>
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
export type QueryAllTestsArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  skip?: InputMaybe<Scalars['IntType']>
  first?: InputMaybe<Scalars['IntType']>
  filter?: InputMaybe<TestModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<TestModelOrderBy>>>
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
export type QueryArticleArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<ArticleModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<ArticleModelOrderBy>>>
}

/** The query root for this schema */
export type QueryBlogArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<BlogModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<BlogModelOrderBy>>>
}

/** The query root for this schema */
export type QueryCaseStudyArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<CaseStudyModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<CaseStudyModelOrderBy>>>
}

/** The query root for this schema */
export type QueryCaseStudyTagArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<CaseStudyTagModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<CaseStudyTagModelOrderBy>>>
}

/** The query root for this schema */
export type QueryClientArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<ClientModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<ClientModelOrderBy>>>
}

/** The query root for this schema */
export type QueryCookieNoticeArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** The query root for this schema */
export type QueryDepartmentArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<DepartmentModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<DepartmentModelOrderBy>>>
}

/** The query root for this schema */
export type QueryErrorPageArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
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
export type QueryNavigationArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** The query root for this schema */
export type QueryPackageArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PackageModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<PackageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryPageArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PageModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryPersonArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PersonModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<PersonModelOrderBy>>>
}

/** The query root for this schema */
export type QueryTeamMemberArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<TeamMemberModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<TeamMemberModelOrderBy>>>
}

/** The query root for this schema */
export type QueryTestArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<TestModelFilter>
  orderBy?: InputMaybe<Array<InputMaybe<TestModelOrderBy>>>
}

/** The query root for this schema */
export type QueryUploadArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<UploadFilter>
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>
}

/** Block of type Quote Tile (quote_tile) */
export type QuoteTileRecord = RecordInterface & {
  __typename?: 'QuoteTileRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  author?: Maybe<PersonRecord>
  colSpan?: Maybe<Scalars['IntType']>
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  quote?: Maybe<Scalars['String']>
  rowSpan?: Maybe<Scalars['IntType']>
  updatedAt: Scalars['DateTime']
}

/** Block of type Quote Tile (quote_tile) */
export type QuoteTileRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type RecordInterface = {
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  id: Scalars['ItemId']
}

export type RecordInterface_SeoMetaTagsArgs = {
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

/** Block of type Rich Text (rich_text) */
export type RichTextRecord = RecordInterface & {
  __typename?: 'RichTextRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  orangeLists: Scalars['BooleanType']
  text?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Block of type Rich Text (rich_text) */
export type RichTextRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Rich Text (rich_text) */
export type RichTextRecordTextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>
}

export type SectionModelContentBlocksField =
  | BadgeListRecord
  | BadgeRecord
  | ClientGridRecord
  | ContactCardRecord
  | FullWidthImageRecord
  | ImageGridRecord
  | JobListingRecord
  | LogoTileGridRecord
  | PackageListRecord
  | PackageTimelineRecord
  | RichTextRecord
  | SimpleLinkRecord
  | TeamMembersGridRecord
  | TileGridRecord
  | TwoLineTextLinkRecord

export type SectionModelContentField = {
  __typename?: 'SectionModelContentField'
  blocks: Array<SectionModelContentBlocksField>
  inlineBlocks: Array<Scalars['String']>
  links: Array<Scalars['String']>
  value: Scalars['JsonField']
}

/** Block of type Section (section) */
export type SectionRecord = RecordInterface & {
  __typename?: 'SectionRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  content?: Maybe<SectionModelContentField>
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  updatedAt: Scalars['DateTime']
}

/** Block of type Section (section) */
export type SectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type SeoField = {
  __typename?: 'SeoField'
  description?: Maybe<Scalars['String']>
  image?: Maybe<FileField>
  noIndex?: Maybe<Scalars['BooleanType']>
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

/** Block of type Sidenote Tile (sidenote_tile) */
export type SidenoteTileRecord = RecordInterface & {
  __typename?: 'SidenoteTileRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  text?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Block of type Sidenote Tile (sidenote_tile) */
export type SidenoteTileRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type SimpleLinkModelInternalLinkField =
  | BlogRecord
  | CaseStudyRecord
  | HomepageRecord
  | JobRecord
  | PackageRecord
  | PageRecord

/** Block of type Simple Link (simple_link) */
export type SimpleLinkRecord = RecordInterface & {
  __typename?: 'SimpleLinkRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  ariaLabel?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  internalLink?: Maybe<SimpleLinkModelInternalLinkField>
  isExternalLink: Scalars['BooleanType']
  text?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
  url?: Maybe<Scalars['String']>
}

/** Block of type Simple Link (simple_link) */
export type SimpleLinkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type Site = {
  __typename?: 'Site'
  favicon?: Maybe<FileField>
  faviconMetaTags: Array<Tag>
  globalSeo?: Maybe<GlobalSeoField>
  locales: Array<SiteLocale>
  noIndex?: Maybe<Scalars['BooleanType']>
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
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']>
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']>
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
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

/** Specifies how to filter Structured Text fields values */
export type StructuredTextFilter = {
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
  /** Filter records with the specified field set as blank (null or single empty paragraph) */
  isBlank?: InputMaybe<Scalars['BooleanType']>
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']>
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
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
  department?: InputMaybe<LinkFilter>
  name?: InputMaybe<StringFilter>
  OR?: InputMaybe<Array<InputMaybe<TeamMemberModelFilter>>>
  AND?: InputMaybe<Array<InputMaybe<TeamMemberModelFilter>>>
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
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
}

/** Record of type Team Member (team_member) */
export type TeamMemberRecord = RecordInterface & {
  __typename?: 'TeamMemberRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  department?: Maybe<DepartmentRecord>
  id: Scalars['ItemId']
  link: Array<SimpleLinkRecord>
  name?: Maybe<Scalars['String']>
  tile: Array<InteractiveImageTileRecord>
  updatedAt: Scalars['DateTime']
}

/** Record of type Team Member (team_member) */
export type TeamMemberRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Team Member Tile (team_member_tile) */
export type TeamMemberTileRecord = RecordInterface & {
  __typename?: 'TeamMemberTileRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  teamMember?: Maybe<TeamMemberRecord>
  updatedAt: Scalars['DateTime']
}

/** Block of type Team Member Tile (team_member_tile) */
export type TeamMemberTileRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Team Members Grid (team_members_grid) */
export type TeamMembersGridRecord = RecordInterface & {
  __typename?: 'TeamMembersGridRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  teamMembers: Array<TeamMemberTileRecord>
  updatedAt: Scalars['DateTime']
}

/** Block of type Team Members Grid (team_members_grid) */
export type TeamMembersGridRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type TestModelFilter = {
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
  OR?: InputMaybe<Array<InputMaybe<TestModelFilter>>>
  AND?: InputMaybe<Array<InputMaybe<TestModelFilter>>>
}

export enum TestModelOrderBy {
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
}

/** Record of type Test (test) */
export type TestRecord = RecordInterface & {
  __typename?: 'TestRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  updatedAt: Scalars['DateTime']
}

/** Record of type Test (test) */
export type TestRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter text fields */
export type TextFilter = {
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']>
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']>
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']>
}

export type TileGridModelTilesField =
  | CaseStudyTileRecord
  | EmptyTileRecord
  | HighlightTileRecord
  | ImageTileRecord
  | InteractiveImageTileRecord
  | LogosWithCaptionTileRecord
  | QuoteTileRecord
  | SidenoteTileRecord
  | TeamMemberTileRecord

/** Block of type Tile Grid (tile_grid) */
export type TileGridRecord = RecordInterface & {
  __typename?: 'TileGridRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  isWide: Scalars['BooleanType']
  tiles: Array<TileGridModelTilesField>
  updatedAt: Scalars['DateTime']
}

/** Block of type Tile Grid (tile_grid) */
export type TileGridRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Timeline Column (timeline_column) */
export type TimelineColumnRecord = RecordInterface & {
  __typename?: 'TimelineColumnRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  title?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Block of type Timeline Column (timeline_column) */
export type TimelineColumnRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Timeline Item (timeline_item) */
export type TimelineItemRecord = RecordInterface & {
  __typename?: 'TimelineItemRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  backgroundColor?: Maybe<ColorField>
  createdAt: Scalars['DateTime']
  endColumn?: Maybe<Scalars['IntType']>
  id: Scalars['ItemId']
  pillOrText: Scalars['BooleanType']
  startColumn?: Maybe<Scalars['IntType']>
  textColor?: Maybe<ColorField>
  title?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Block of type Timeline Item (timeline_item) */
export type TimelineItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Two Line Text + Link (two_line_text_link) */
export type TwoLineTextLinkRecord = RecordInterface & {
  __typename?: 'TwoLineTextLinkRecord'
  _createdAt: Scalars['DateTime']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>
  _firstPublishedAt: Scalars['DateTime']
  _isValid: Scalars['BooleanType']
  _modelApiKey: Scalars['String']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>
  _publishedAt: Scalars['DateTime']
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>
  _updatedAt: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  id: Scalars['ItemId']
  link?: Maybe<SimpleLinkRecord>
  linkLine?: Maybe<Scalars['String']>
  topLine?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

/** Block of type Two Line Text + Link (two_line_text_link) */
export type TwoLineTextLinkRecord_SeoMetaTagsArgs = {
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
  AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>
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
  allIn?: InputMaybe<Array<Scalars['String']>>
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars['String']>>
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars['String']>>
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars['String']>>
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
  alt?: Maybe<Scalars['String']>
  blurUpThumb?: Maybe<Scalars['String']>
  blurhash?: Maybe<Scalars['String']>
  duration?: Maybe<Scalars['Int']>
  framerate?: Maybe<Scalars['Int']>
  height: Scalars['IntType']
  mp4Url?: Maybe<Scalars['String']>
  muxAssetId: Scalars['String']
  muxPlaybackId: Scalars['String']
  streamingUrl: Scalars['String']
  thumbhash?: Maybe<Scalars['String']>
  thumbnailUrl: Scalars['String']
  title?: Maybe<Scalars['String']>
  width: Scalars['IntType']
}

export type UploadVideoFieldAltArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

export type UploadVideoFieldBlurUpThumbArgs = {
  punch?: Scalars['Float']
  size?: Scalars['Int']
  quality?: Scalars['Int']
  imgixParams?: InputMaybe<ImgixParams>
}

export type UploadVideoFieldMp4UrlArgs = {
  res?: InputMaybe<VideoMp4Res>
  exactRes?: InputMaybe<VideoMp4Res>
}

export type UploadVideoFieldThumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>
}

export type UploadVideoFieldTitleArgs = {
  locale?: InputMaybe<SiteLocale>
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
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
  x: Scalars['FloatType']
  y: Scalars['FloatType']
}
