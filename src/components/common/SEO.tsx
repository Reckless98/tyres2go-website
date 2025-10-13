import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../config/seo';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'business.business';
  schemaMarkup?: object;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'business.business',
  schemaMarkup,
}) => {
  const pageTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.defaultTitle;
  const pageDescription = description || seoConfig.defaultDescription;
  const pageKeywords = [...seoConfig.keywords, ...keywords].join(', ');
  const pageImage = image || `${seoConfig.siteUrl}/images/tyres2go-og.jpg`;
  const pageUrl = url || seoConfig.siteUrl;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: seoConfig.business.name,
    legalName: seoConfig.business.legalName,
    url: seoConfig.siteUrl,
    logo: `${seoConfig.siteUrl}/logo.png`,
    foundingDate: seoConfig.business.foundingDate,
    email: seoConfig.business.email,
    telephone: seoConfig.business.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: seoConfig.business.address.street,
      addressLocality: seoConfig.business.address.city,
      addressRegion: seoConfig.business.address.region,
      postalCode: seoConfig.business.address.postalCode,
      addressCountry: seoConfig.business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: seoConfig.business.geo.latitude,
      longitude: seoConfig.business.geo.longitude,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: seoConfig.business.rating.value,
      reviewCount: seoConfig.business.rating.count,
    },
    priceRange: seoConfig.business.priceRange,
    areaServed: {
      '@type': 'City',
      name: 'Christchurch',
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: seoConfig.business.geo.latitude,
        longitude: seoConfig.business.geo.longitude,
      },
      geoRadius: '50km',
    },
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content={seoConfig.author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:locale" content="en_NZ" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={pageImage} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="NZ-CAN" />
      <meta name="geo.placename" content="Christchurch" />
      <meta name="geo.position" content={`${seoConfig.business.geo.latitude};${seoConfig.business.geo.longitude}`} />
      <meta name="ICBM" content={`${seoConfig.business.geo.latitude}, ${seoConfig.business.geo.longitude}`} />

      {/* Canonical URL */}
      <link rel="canonical" href={pageUrl} />

      {/* Schema.org Markup */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
