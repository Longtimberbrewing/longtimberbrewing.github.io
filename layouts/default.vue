<template>
  <div id="default">
    <Navigation></Navigation>
    <nuxt />
  </div>
</template>
<script>
export default {
  components: {
    Navigation: () => import('@/components/site/Navigation')
  },
  data () {
    return {
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "image": [
          "https://example.com/photos/1x1/photo.jpg",
          "https://example.com/photos/4x3/photo.jpg",
          "https://example.com/photos/16x9/photo.jpg"
        ],
        "@id": "https://longtimberbrewing.com",
        "name": process.env.companyName,
        "address": process.env.address,
        "geo": {
          "@type": "GeoCoordinates",
          ...process.env.geo
        },
        "url": process.env.baseUrl,
        "telephone": process.env.contact.phoneFormatted,
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [ ...process.env.hours.dayOfWeek ],
            "opens": process.env.hours.opens,
            "closes": process.env.hours.closes
          }
        ],
        "menu": `${process.env.baseUrl}/menu`,
        "acceptsReservations": "True"
      }
    }
  },
  head() {
    return {
      __dangerouslyDisableSanitizers: ['script'],
      script: [{ innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }]
    }
  }
}
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: $cream-light;
}
</style>
