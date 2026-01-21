import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fqtwfnlujnjtikqtpydd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxdHdmbmx1am5qdGlrcXRweWRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYxMjA5MDUsImV4cCI6MjA4MTY5NjkwNX0.OGmDoWC6pJQwsInNkCWF7CmzmcbdtlRyeIRfLG0wl7U'

const supabase = createClient(supabaseUrl, supabaseKey)

async function main() {
    const { data: blogs, error } = await supabase.from('blogs').select('slug, title, description, meta_description, faqs, meta_keywords')
    if (error) {
        console.error('Error fetching blogs:', error)
        return
    }

    console.log('Total blogs found:', blogs.length)
    blogs.forEach(blog => {
        console.log('--------------------------------------------------')
        console.log('Slug:', blog.slug)
        console.log('Title:', blog.title)
        console.log('Description (len):', blog.description ? blog.description.length : 'NULL')
        console.log('Meta Description (len):', blog.meta_description ? blog.meta_description.length : 'NULL')
        console.log('Meta Keywords:', blog.meta_keywords)
        console.log('FAQs type:', typeof blog.faqs)
        console.log('FAQs isArray:', Array.isArray(blog.faqs))
    })
}

main()
