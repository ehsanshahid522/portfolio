import React from 'react';
import PageShell from '../components/PageShell';
import SectionHeader from '../components/common/SectionHeader';
import ServiceCard from '../components/common/ServiceCard';
import services from '../data/services';
import FreeConsultationBanner from '../components/FreeConsultationBanner';

const Services = () => {
  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-16">
        <SectionHeader
          tag="Solutions Offered"
          title={<>Client Services & <span className="gradient-text">Solutions</span></>}
          subtitle="I help startups, business owners, and organizations turn ideas into fast, modern, and high-converting digital products."
        />

        {/* Services List using Centralized ServiceCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <ServiceCard
              key={srv.id}
              service={srv}
              index={idx}
              isServicePage={true}
            />
          ))}
        </div>
      </section>

      {/* FREE CONSULTATION BANNER */}
      <FreeConsultationBanner />
    </PageShell>
  );
};

export default Services;
