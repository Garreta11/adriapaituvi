// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice = HeroMediaSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Item in *Information → Phones*
 */
export interface InformationDocumentDataPhonesItem {
  /**
   * Prefix field in *Information → Phones*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: information.phones[].prefix
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  prefix: prismic.KeyTextField;

  /**
   * Phone field in *Information → Phones*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: information.phones[].phone
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  phone: prismic.KeyTextField;
}

/**
 * Item in *Information → Cities*
 */
export interface InformationDocumentDataCitiesItem {
  /**
   * City field in *Information → Cities*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: information.cities[].city
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  city: prismic.KeyTextField;

  /**
   * Current City field in *Information → Cities*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: information.cities[].current_city
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  current_city: prismic.BooleanField;
}

/**
 * Content for Information documents
 */
interface InformationDocumentData {
  /**
   * Job Position field in *Information*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: information.job_position
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  job_position: prismic.KeyTextField;

  /**
   * Email field in *Information*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: information.email
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;

  /**
   * Phones field in *Information*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: information.phones[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  phones: prismic.GroupField<Simplify<InformationDocumentDataPhonesItem>>;

  /**
   * Linkedin field in *Information*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: information.linkedin
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  linkedin: prismic.LinkField;

  /**
   * Instagram field in *Information*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: information.instagram
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  instagram: prismic.LinkField;

  /**
   * Cities field in *Information*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: information.cities[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  cities: prismic.GroupField<Simplify<InformationDocumentDataCitiesItem>>;

  /**
   * Copyright field in *Information*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: information.copyright
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  copyright: prismic.KeyTextField;
}

/**
 * Information document from Prismic
 *
 * - **API ID**: `information`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type InformationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<InformationDocumentData>,
    "information",
    Lang
  >;

/**
 * Item in *Main Menu → Menu*
 */
export interface MainMenuDocumentDataMenuItem {
  /**
   * Item field in *Main Menu → Menu*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: main_menu.menu[].item
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  item: prismic.LinkField;
}

/**
 * Content for Main Menu documents
 */
interface MainMenuDocumentData {
  /**
   * Menu field in *Main Menu*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: main_menu.menu[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  menu: prismic.GroupField<Simplify<MainMenuDocumentDataMenuItem>>;
}

/**
 * Main Menu document from Prismic
 *
 * - **API ID**: `main_menu`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MainMenuDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<MainMenuDocumentData>,
    "main_menu",
    Lang
  >;

type PageDocumentDataSlicesSlice = DescriptionSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

type WorkDocumentDataSlicesSlice =
  | ProjectCreditsSlice
  | GallerySlice
  | DescriptionSlice
  | HeroProjectSlice;

/**
 * Content for Work documents
 */
interface WorkDocumentData {
  /**
   * Title field in *Work*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Work*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: work.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<WorkDocumentDataSlicesSlice> /**
   * Meta Description field in *Work*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: work.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Work*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: work.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Work*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: work.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Work document from Prismic
 *
 * - **API ID**: `work`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type WorkDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<WorkDocumentData>, "work", Lang>;

export type AllDocumentTypes =
  | HomepageDocument
  | InformationDocument
  | MainMenuDocument
  | PageDocument
  | WorkDocument;

/**
 * Primary content in *Description → Primary*
 */
export interface DescriptionSliceDefaultPrimary {
  /**
   * Description field in *Description → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: description.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for Description Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DescriptionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<DescriptionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Description*
 */
type DescriptionSliceVariation = DescriptionSliceDefault;

/**
 * Description Shared Slice
 *
 * - **API ID**: `description`
 * - **Description**: Description
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DescriptionSlice = prismic.SharedSlice<
  "description",
  DescriptionSliceVariation
>;

/**
 * Primary content in *Gallery → Items*
 */
export interface GallerySliceDefaultItem {
  /**
   * Image field in *Gallery → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Gallery Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<GallerySliceDefaultItem>
>;

/**
 * Slice variation for *Gallery*
 */
type GallerySliceVariation = GallerySliceDefault;

/**
 * Gallery Shared Slice
 *
 * - **API ID**: `gallery`
 * - **Description**: Gallery
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySlice = prismic.SharedSlice<
  "gallery",
  GallerySliceVariation
>;

/**
 * Primary content in *HeroMedia → Primary*
 */
export interface HeroMediaSliceDefaultPrimary {
  /**
   * Hero field in *HeroMedia → Primary*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_media.primary.hero
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  hero: prismic.LinkToMediaField;
}

/**
 * Default variation for HeroMedia Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroMediaSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroMediaSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeroMedia*
 */
type HeroMediaSliceVariation = HeroMediaSliceDefault;

/**
 * HeroMedia Shared Slice
 *
 * - **API ID**: `hero_media`
 * - **Description**: HeroMedia
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroMediaSlice = prismic.SharedSlice<
  "hero_media",
  HeroMediaSliceVariation
>;

/**
 * Primary content in *HeroProject → Primary*
 */
export interface HeroProjectSliceDefaultPrimary {
  /**
   * Hero field in *HeroProject → Primary*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_project.primary.hero
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  hero: prismic.LinkToMediaField;
}

/**
 * Default variation for HeroProject Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroProjectSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroProjectSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeroProject*
 */
type HeroProjectSliceVariation = HeroProjectSliceDefault;

/**
 * HeroProject Shared Slice
 *
 * - **API ID**: `hero_project`
 * - **Description**: HeroProject
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroProjectSlice = prismic.SharedSlice<
  "hero_project",
  HeroProjectSliceVariation
>;

/**
 * Primary content in *ProjectCredits → Primary*
 */
export interface ProjectCreditsSliceDefaultPrimary {
  /**
   * Title field in *ProjectCredits → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_credits.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *ProjectCredits → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_credits.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Credits field in *ProjectCredits → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_credits.primary.credits
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  credits: prismic.RichTextField;
}

/**
 * Default variation for ProjectCredits Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectCreditsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProjectCreditsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ProjectCredits*
 */
type ProjectCreditsSliceVariation = ProjectCreditsSliceDefault;

/**
 * ProjectCredits Shared Slice
 *
 * - **API ID**: `project_credits`
 * - **Description**: ProjectCredits
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectCreditsSlice = prismic.SharedSlice<
  "project_credits",
  ProjectCreditsSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      InformationDocument,
      InformationDocumentData,
      InformationDocumentDataPhonesItem,
      InformationDocumentDataCitiesItem,
      MainMenuDocument,
      MainMenuDocumentData,
      MainMenuDocumentDataMenuItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      WorkDocument,
      WorkDocumentData,
      WorkDocumentDataSlicesSlice,
      AllDocumentTypes,
      DescriptionSlice,
      DescriptionSliceDefaultPrimary,
      DescriptionSliceVariation,
      DescriptionSliceDefault,
      GallerySlice,
      GallerySliceDefaultItem,
      GallerySliceVariation,
      GallerySliceDefault,
      HeroMediaSlice,
      HeroMediaSliceDefaultPrimary,
      HeroMediaSliceVariation,
      HeroMediaSliceDefault,
      HeroProjectSlice,
      HeroProjectSliceDefaultPrimary,
      HeroProjectSliceVariation,
      HeroProjectSliceDefault,
      ProjectCreditsSlice,
      ProjectCreditsSliceDefaultPrimary,
      ProjectCreditsSliceVariation,
      ProjectCreditsSliceDefault,
    };
  }
}
