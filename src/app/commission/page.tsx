import {
    Avatar,
    Button,
    Column,
    Heading,
    Icon,
    IconButton,
    Media,
    Tag,
    Text,
    Meta,
    Schema,
    Row
} from '@once-ui-system/core'
import {baseURL, bryony, commission} from '@/resources'
import styles from '@/components/about/about.module.scss'
import React from 'react'

export async function generateMetadata() {
    return Meta.generate({
        title: commission.title,
        description: commission.description,
        baseURL,
        image: `/api/og/generate?title=${encodeURIComponent(commission.title)}`,
        path: commission.path
    })
}

export default function Hire() {
    return (
        <Column maxWidth='m'>
            <Schema
                as='webPage'
                baseURL={baseURL}
                title={commission.title}
                description={commission.description}
                path={commission.path}
                image={`/api/og/generate?title=${encodeURIComponent(commission.title)}`}
                author={{
                    name: bryony.name,
                    url: baseURL,
                    image: `${baseURL}${bryony.avatar}`
                }}
            />
            Commission page
        </Column>
    )
}
