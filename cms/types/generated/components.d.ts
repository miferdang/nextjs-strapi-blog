import type { Schema, Attribute } from '@strapi/strapi';

export interface BlockSectionAbout extends Schema.Component {
  collectionName: 'components_block_section_abouts';
  info: {
    displayName: 'SectionAbout';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 500;
      }>;
    Content: Attribute.RichText &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 5000;
      }>;
    Media: Attribute.Media<'images' | 'videos'> & Attribute.Required;
    MediaFirst: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    Readmore: Attribute.Component<'button.link'> & Attribute.Required;
  };
}

export interface BlockSectionHero extends Schema.Component {
  collectionName: 'components_block_section_heroes';
  info: {
    displayName: 'SectionHero';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 500;
      }>;
    Description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 1000;
      }>;
  };
}

export interface ButtonLink extends Schema.Component {
  collectionName: 'components_button_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    Label: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 1000;
      }>;
    Url: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 1000;
      }>;
  };
}

export interface MenuLink extends Schema.Component {
  collectionName: 'components_menu_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    Label: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 1000;
      }>;
    Title: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 1000;
      }>;
    Url: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 1000;
      }>;
    Target: Attribute.Enumeration<
      ['_blank', '_self', '_parent', '_top', 'framename']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'_self'>;
    Icon: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'block.section-about': BlockSectionAbout;
      'block.section-hero': BlockSectionHero;
      'button.link': ButtonLink;
      'menu.link': MenuLink;
    }
  }
}
