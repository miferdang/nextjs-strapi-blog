import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksSectionAbout extends Schema.Component {
  collectionName: 'components_block_section_abouts';
  info: {
    displayName: 'SectionAbout';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 500;
      }>;
    content: Attribute.RichText &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 5000;
      }>;
    media: Attribute.Media<'images' | 'videos'> & Attribute.Required;
    mediaFirst: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    action: Attribute.Component<'components.button'> & Attribute.Required;
  };
}

export interface BlocksSectionArticles extends Schema.Component {
  collectionName: 'components_blocks_section_articles';
  info: {
    displayName: 'SectionArticles';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    articles: Attribute.Relation<
      'blocks.section-articles',
      'oneToMany',
      'api::article.article'
    >;
  };
}

export interface BlocksSectionHero extends Schema.Component {
  collectionName: 'components_block_section_heroes';
  info: {
    displayName: 'SectionHero';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 500;
      }>;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 1000;
      }>;
  };
}

export interface BlocksSectionProjects extends Schema.Component {
  collectionName: 'components_blocks_section_projects';
  info: {
    displayName: 'SectionProjects';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 2;
        maxLength: 500;
      }>;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 1000;
      }>;
    projects: Attribute.Relation<
      'blocks.section-projects',
      'oneToMany',
      'api::project.project'
    >;
  };
}

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    label: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 1000;
      }>;
    url: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 1000;
      }>;
  };
}

export interface ComponentsCard extends Schema.Component {
  collectionName: 'components_components_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 500;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 1000;
      }>;
    media: Attribute.Media<'images' | 'videos'>;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    label: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 1000;
      }>;
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 1000;
      }>;
    url: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 1000;
      }>;
    target: Attribute.Enumeration<
      ['_blank', '_self', '_parent', '_top', 'framename']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'_self'>;
    icon: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.section-about': BlocksSectionAbout;
      'blocks.section-articles': BlocksSectionArticles;
      'blocks.section-hero': BlocksSectionHero;
      'blocks.section-projects': BlocksSectionProjects;
      'components.button': ComponentsButton;
      'components.card': ComponentsCard;
      'components.link': ComponentsLink;
    }
  }
}
