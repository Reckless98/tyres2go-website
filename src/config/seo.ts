// SEO Configuration for Tyres2Go
export const seoConfig = {
  siteName: 'Tyres2Go - Premium Tyre & Auto Services Christchurch',
  siteUrl: 'https://www.tyres2go.net.nz',
  defaultTitle: 'Tyres2Go | Quality Tyres & Auto Repairs in Christchurch',
  defaultDescription: 'Tyres2Go offers premium tyre sales, wheel alignment, mobile tyre service, and full automotive repairs across 6 locations in Christchurch. MTA certified with 15+ years experience. Phone: 03 341 7675',
  keywords: [
    'tyres Christchurch',
    'tyre service Canterbury',
    'mobile tyre service',
    'wheel alignment Christchurch',
    'auto repairs Christchurch',
    'WOF Christchurch',
    'car service Christchurch',
    'puncture repair',
    'tyre fitting',
    'Michelin tyres',
    'Bridgestone tyres',
    'Continental tyres',
    'MTA certified mechanic',
    'automotive repairs',
    'car repairs Christchurch',
  ],
  author: 'Tyres2Go',
  social: {
    facebook: '',
    instagram: '',
    twitter: '',
  },
  business: {
    name: 'Tyres2Go',
    legalName: 'Tyres 2 Go Ltd',
    foundingDate: '2008',
    email: 'info@tyres2go.net.nz',
    phone: '03 341 7675',
    address: {
      street: '477 Blenheim Road',
      suburb: 'Sockburn',
      city: 'Christchurch',
      region: 'Canterbury',
      postalCode: '8042',
      country: 'New Zealand',
    },
    geo: {
      latitude: '-43.539494',
      longitude: '172.565893',
    },
    rating: {
      value: '4.1',
      count: '100+',
    },
    priceRange: '$$',
  },
};

export const generateMetaTags = (
  title?: string,
  description?: string,
  keywords?: string[],
  image?: string,
  url?: string
) => {
  return {
    title: title || seoConfig.defaultTitle,
    description: description || seoConfig.defaultDescription,
    keywords: [...seoConfig.keywords, ...(keywords || [])].join(', '),
    ogTitle: title || seoConfig.defaultTitle,
    ogDescription: description || seoConfig.defaultDescription,
    ogImage: image || `${seoConfig.siteUrl}/images/tyres2go-og.jpg`,
    ogUrl: url || seoConfig.siteUrl,
    twitterCard: 'summary_large_image',
  };
};

export default seoConfig;
