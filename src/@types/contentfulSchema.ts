export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<Scalars['String']>;
  fileName: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Int']>;
  linkedFrom: Maybe<AssetLinkingCollections>;
  size: Maybe<Scalars['Int']>;
  sys: Sys;
  title: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale: InputMaybe<Scalars['String']>;
  transform: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType: InputMaybe<Scalars['String']>;
  contentType_contains: InputMaybe<Scalars['String']>;
  contentType_exists: InputMaybe<Scalars['Boolean']>;
  contentType_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not: InputMaybe<Scalars['String']>;
  contentType_not_contains: InputMaybe<Scalars['String']>;
  contentType_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars['String']>;
  description_contains: InputMaybe<Scalars['String']>;
  description_exists: InputMaybe<Scalars['Boolean']>;
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not: InputMaybe<Scalars['String']>;
  description_not_contains: InputMaybe<Scalars['String']>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName: InputMaybe<Scalars['String']>;
  fileName_contains: InputMaybe<Scalars['String']>;
  fileName_exists: InputMaybe<Scalars['Boolean']>;
  fileName_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not: InputMaybe<Scalars['String']>;
  fileName_not_contains: InputMaybe<Scalars['String']>;
  fileName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height: InputMaybe<Scalars['Int']>;
  height_exists: InputMaybe<Scalars['Boolean']>;
  height_gt: InputMaybe<Scalars['Int']>;
  height_gte: InputMaybe<Scalars['Int']>;
  height_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt: InputMaybe<Scalars['Int']>;
  height_lte: InputMaybe<Scalars['Int']>;
  height_not: InputMaybe<Scalars['Int']>;
  height_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size: InputMaybe<Scalars['Int']>;
  size_exists: InputMaybe<Scalars['Boolean']>;
  size_gt: InputMaybe<Scalars['Int']>;
  size_gte: InputMaybe<Scalars['Int']>;
  size_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt: InputMaybe<Scalars['Int']>;
  size_lte: InputMaybe<Scalars['Int']>;
  size_not: InputMaybe<Scalars['Int']>;
  size_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']>;
  title_contains: InputMaybe<Scalars['String']>;
  title_exists: InputMaybe<Scalars['Boolean']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not: InputMaybe<Scalars['String']>;
  title_not_contains: InputMaybe<Scalars['String']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url: InputMaybe<Scalars['String']>;
  url_contains: InputMaybe<Scalars['String']>;
  url_exists: InputMaybe<Scalars['Boolean']>;
  url_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not: InputMaybe<Scalars['String']>;
  url_not_contains: InputMaybe<Scalars['String']>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width: InputMaybe<Scalars['Int']>;
  width_exists: InputMaybe<Scalars['Boolean']>;
  width_gt: InputMaybe<Scalars['Int']>;
  width_gte: InputMaybe<Scalars['Int']>;
  width_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt: InputMaybe<Scalars['Int']>;
  width_lte: InputMaybe<Scalars['Int']>;
  width_not: InputMaybe<Scalars['Int']>;
  width_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  postCollection: Maybe<PostCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  sys: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width: InputMaybe<Scalars['Dimension']>;
};

/** Blog post [See type definition](https://app.contentful.com/spaces/yl6dtigq9wfo/content_types/post) */
export type Post = Entry & {
  __typename?: 'Post';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom: Maybe<PostLinkingCollections>;
  previewImg: Maybe<Asset>;
  recommended: Maybe<Scalars['Boolean']>;
  slug: Maybe<Scalars['String']>;
  smallDescription: Maybe<Scalars['String']>;
  sys: Sys;
  tag: Maybe<Tag>;
  text: Maybe<PostText>;
  title: Maybe<Scalars['String']>;
};


/** Blog post [See type definition](https://app.contentful.com/spaces/yl6dtigq9wfo/content_types/post) */
export type PostLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Blog post [See type definition](https://app.contentful.com/spaces/yl6dtigq9wfo/content_types/post) */
export type PostPreviewImgArgs = {
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


/** Blog post [See type definition](https://app.contentful.com/spaces/yl6dtigq9wfo/content_types/post) */
export type PostRecommendedArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Blog post [See type definition](https://app.contentful.com/spaces/yl6dtigq9wfo/content_types/post) */
export type PostSlugArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Blog post [See type definition](https://app.contentful.com/spaces/yl6dtigq9wfo/content_types/post) */
export type PostSmallDescriptionArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Blog post [See type definition](https://app.contentful.com/spaces/yl6dtigq9wfo/content_types/post) */
export type PostTagArgs = {
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


/** Blog post [See type definition](https://app.contentful.com/spaces/yl6dtigq9wfo/content_types/post) */
export type PostTextArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Blog post [See type definition](https://app.contentful.com/spaces/yl6dtigq9wfo/content_types/post) */
export type PostTitleArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type PostCollection = {
  __typename?: 'PostCollection';
  items: Array<Maybe<Post>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PostFilter = {
  AND: InputMaybe<Array<InputMaybe<PostFilter>>>;
  OR: InputMaybe<Array<InputMaybe<PostFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  previewImg_exists: InputMaybe<Scalars['Boolean']>;
  recommended: InputMaybe<Scalars['Boolean']>;
  recommended_exists: InputMaybe<Scalars['Boolean']>;
  recommended_not: InputMaybe<Scalars['Boolean']>;
  slug: InputMaybe<Scalars['String']>;
  slug_contains: InputMaybe<Scalars['String']>;
  slug_exists: InputMaybe<Scalars['Boolean']>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not: InputMaybe<Scalars['String']>;
  slug_not_contains: InputMaybe<Scalars['String']>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  smallDescription: InputMaybe<Scalars['String']>;
  smallDescription_contains: InputMaybe<Scalars['String']>;
  smallDescription_exists: InputMaybe<Scalars['Boolean']>;
  smallDescription_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  smallDescription_not: InputMaybe<Scalars['String']>;
  smallDescription_not_contains: InputMaybe<Scalars['String']>;
  smallDescription_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys: InputMaybe<SysFilter>;
  tag: InputMaybe<CfTagNestedFilter>;
  tag_exists: InputMaybe<Scalars['Boolean']>;
  text_contains: InputMaybe<Scalars['String']>;
  text_exists: InputMaybe<Scalars['Boolean']>;
  text_not_contains: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
  title_contains: InputMaybe<Scalars['String']>;
  title_exists: InputMaybe<Scalars['Boolean']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not: InputMaybe<Scalars['String']>;
  title_not_contains: InputMaybe<Scalars['String']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PostLinkingCollections = {
  __typename?: 'PostLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type PostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PostOrder {
  RecommendedAsc = 'recommended_ASC',
  RecommendedDesc = 'recommended_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PostText = {
  __typename?: 'PostText';
  json: Scalars['JSON'];
  links: PostTextLinks;
};

export type PostTextAssets = {
  __typename?: 'PostTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PostTextEntries = {
  __typename?: 'PostTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PostTextLinks = {
  __typename?: 'PostTextLinks';
  assets: PostTextAssets;
  entries: PostTextEntries;
};

export type Query = {
  __typename?: 'Query';
  asset: Maybe<Asset>;
  assetCollection: Maybe<AssetCollection>;
  entryCollection: Maybe<EntryCollection>;
  post: Maybe<Post>;
  postCollection: Maybe<PostCollection>;
  tag: Maybe<Tag>;
  tagCollection: Maybe<TagCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<AssetFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<EntryFilter>;
};


export type QueryPostArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


export type QueryPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<Array<InputMaybe<PostOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<PostFilter>;
};


export type QueryTagArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


export type QueryTagCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<Array<InputMaybe<TagOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<TagFilter>;
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt: Maybe<Scalars['DateTime']>;
  publishedVersion: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id: InputMaybe<Scalars['String']>;
  id_contains: InputMaybe<Scalars['String']>;
  id_exists: InputMaybe<Scalars['Boolean']>;
  id_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not: InputMaybe<Scalars['String']>;
  id_not_contains: InputMaybe<Scalars['String']>;
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion: InputMaybe<Scalars['Float']>;
  publishedVersion_exists: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt: InputMaybe<Scalars['Float']>;
  publishedVersion_gte: InputMaybe<Scalars['Float']>;
  publishedVersion_in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt: InputMaybe<Scalars['Float']>;
  publishedVersion_lte: InputMaybe<Scalars['Float']>;
  publishedVersion_not: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** Tag for Blog post [See type definition](https://app.contentful.com/spaces/yl6dtigq9wfo/content_types/tag) */
export type Tag = Entry & {
  __typename?: 'Tag';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom: Maybe<TagLinkingCollections>;
  name: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Tag for Blog post [See type definition](https://app.contentful.com/spaces/yl6dtigq9wfo/content_types/tag) */
export type TagLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Tag for Blog post [See type definition](https://app.contentful.com/spaces/yl6dtigq9wfo/content_types/tag) */
export type TagNameArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Tag for Blog post [See type definition](https://app.contentful.com/spaces/yl6dtigq9wfo/content_types/tag) */
export type TagSlugArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type TagCollection = {
  __typename?: 'TagCollection';
  items: Array<Maybe<Tag>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TagFilter = {
  AND: InputMaybe<Array<InputMaybe<TagFilter>>>;
  OR: InputMaybe<Array<InputMaybe<TagFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  name: InputMaybe<Scalars['String']>;
  name_contains: InputMaybe<Scalars['String']>;
  name_exists: InputMaybe<Scalars['Boolean']>;
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not: InputMaybe<Scalars['String']>;
  name_not_contains: InputMaybe<Scalars['String']>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug: InputMaybe<Scalars['String']>;
  slug_contains: InputMaybe<Scalars['String']>;
  slug_exists: InputMaybe<Scalars['Boolean']>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not: InputMaybe<Scalars['String']>;
  slug_not_contains: InputMaybe<Scalars['String']>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys: InputMaybe<SysFilter>;
};

export type TagLinkingCollections = {
  __typename?: 'TagLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  postCollection: Maybe<PostCollection>;
};


export type TagLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TagLinkingCollectionsPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TagOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CfTagNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfTagNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfTagNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  name: InputMaybe<Scalars['String']>;
  name_contains: InputMaybe<Scalars['String']>;
  name_exists: InputMaybe<Scalars['Boolean']>;
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not: InputMaybe<Scalars['String']>;
  name_not_contains: InputMaybe<Scalars['String']>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug: InputMaybe<Scalars['String']>;
  slug_contains: InputMaybe<Scalars['String']>;
  slug_exists: InputMaybe<Scalars['Boolean']>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not: InputMaybe<Scalars['String']>;
  slug_not_contains: InputMaybe<Scalars['String']>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys: InputMaybe<SysFilter>;
};

export type SmallArticleFragment = { __typename?: 'Post', slug: string, title: string, smallDescription: string, tag: { __typename?: 'Tag', name: string }, sys: { __typename?: 'Sys', publishedAt: any } };

export type MixArticleFragment = { __typename?: 'Post', slug: string, title: string, smallDescription: string, tag: { __typename?: 'Tag', name: string }, sys: { __typename?: 'Sys', publishedAt: any }, previewImg: { __typename?: 'Asset', url: string, title: string } };

export type GetAllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTagsQuery = { __typename?: 'Query', tagCollection: { __typename?: 'TagCollection', items: Array<{ __typename?: 'Tag', name: string, slug: string }> } };

export type GetFirst5PostsSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFirst5PostsSlugsQuery = { __typename?: 'Query', postCollection: { __typename?: 'PostCollection', items: Array<{ __typename?: 'Post', slug: string }> } };

export type MainPageQueryVariables = Exact<{
  first5Slugs: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type MainPageQuery = { __typename?: 'Query', tagCollection: { __typename?: 'TagCollection', items: Array<{ __typename?: 'Tag', name: string, slug: string }> }, posts: { __typename?: 'PostCollection', items: Array<{ __typename?: 'Post', slug: string, title: string, smallDescription: string, tag: { __typename?: 'Tag', name: string }, sys: { __typename?: 'Sys', publishedAt: any }, previewImg: { __typename?: 'Asset', url: string, title: string } }> }, recommended: { __typename?: 'PostCollection', items: Array<{ __typename?: 'Post', slug: string, title: string, smallDescription: string, tag: { __typename?: 'Tag', name: string }, sys: { __typename?: 'Sys', publishedAt: any } }> }, toefl: { __typename?: 'PostCollection', items: Array<{ __typename?: 'Post', slug: string, title: string, smallDescription: string, tag: { __typename?: 'Tag', name: string }, sys: { __typename?: 'Sys', publishedAt: any }, previewImg: { __typename?: 'Asset', url: string, title: string } }> }, grammar: { __typename?: 'PostCollection', items: Array<{ __typename?: 'Post', slug: string, title: string, smallDescription: string, tag: { __typename?: 'Tag', name: string }, sys: { __typename?: 'Sys', publishedAt: any }, previewImg: { __typename?: 'Asset', url: string, title: string } }> }, usCulture: { __typename?: 'PostCollection', items: Array<{ __typename?: 'Post', slug: string, title: string, smallDescription: string, tag: { __typename?: 'Tag', name: string }, sys: { __typename?: 'Sys', publishedAt: any }, previewImg: { __typename?: 'Asset', url: string, title: string } }> }, det: { __typename?: 'PostCollection', items: Array<{ __typename?: 'Post', slug: string, title: string, smallDescription: string, tag: { __typename?: 'Tag', name: string }, sys: { __typename?: 'Sys', publishedAt: any }, previewImg: { __typename?: 'Asset', url: string, title: string } }> }, speakingTips: { __typename?: 'PostCollection', items: Array<{ __typename?: 'Post', slug: string, title: string, smallDescription: string, tag: { __typename?: 'Tag', name: string }, sys: { __typename?: 'Sys', publishedAt: any }, previewImg: { __typename?: 'Asset', url: string, title: string } }> } };

export type GetPostsByTagQueryVariables = Exact<{
  tagName: InputMaybe<Scalars['String']>;
}>;


export type GetPostsByTagQuery = { __typename?: 'Query', postCollection: { __typename?: 'PostCollection', total: number, items: Array<{ __typename?: 'Post', title: string, slug: string, smallDescription: string, previewImg: { __typename?: 'Asset', title: string, url: string }, tag: { __typename?: 'Tag', name: string }, sys: { __typename?: 'Sys', publishedAt: any } }> } };

export type GetAllRecommendedPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllRecommendedPostsQuery = { __typename?: 'Query', postCollection: { __typename?: 'PostCollection', total: number, items: Array<{ __typename?: 'Post', title: string, slug: string, smallDescription: string, previewImg: { __typename?: 'Asset', title: string, url: string }, tag: { __typename?: 'Tag', name: string }, sys: { __typename?: 'Sys', publishedAt: any } }> } };

export type GetAllPostsSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostsSlugsQuery = { __typename?: 'Query', postCollection: { __typename?: 'PostCollection', items: Array<{ __typename?: 'Post', slug: string }> } };

export type GetPostBySlugQueryVariables = Exact<{
  slug: InputMaybe<Scalars['String']>;
}>;


export type GetPostBySlugQuery = { __typename?: 'Query', postCollection: { __typename?: 'PostCollection', items: Array<{ __typename?: 'Post', title: string, smallDescription: string, sys: { __typename?: 'Sys', publishedAt: any }, previewImg: { __typename?: 'Asset', title: string, url: string }, text: { __typename?: 'PostText', json: any, links: { __typename?: 'PostTextLinks', entries: { __typename?: 'PostTextEntries', hyperlink: Array<{ __typename?: 'Post', title: string, slug: string, sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Tag', sys: { __typename?: 'Sys', id: string } }> }, assets: { __typename?: 'PostTextAssets', block: Array<{ __typename?: 'Asset', title: string, url: string, width: number, height: number, sys: { __typename?: 'Sys', id: string } }> } } }, tag: { __typename?: 'Tag', name: string } }> } };
