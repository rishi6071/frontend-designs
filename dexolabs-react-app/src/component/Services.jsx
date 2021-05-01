import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Services = () => {

    return (
        <>
            <section>
                <div className="container my-4">

                    {/* Services Heading */}
                    <div className="row mb-2">
                        <h3 className="text-center">Our Services</h3>
                    </div>

                    {/* Different Services */}
                    <div className="row">
                        {
                            Sdata.map((service, serviceId) => {
                                return <Card id = {service.id}
                                    title = {service.title}
                                    description = {service.description}
                                    imgsrc = {service.imgsrc}
                                    alternateText = {service.alternateText}
                                />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services;