import { OperationContext } from '@vercel/commerce/api/operations'
import { Category } from '@vercel/commerce/types/site'
import { LocalConfig } from '../index'

export type GetSiteInfoResult<
  T extends { categories: any[]; brands: any[] } = {
    categories: Category[]
    brands: any[]
  }
> = T

export default function getSiteInfoOperation({}: OperationContext<any>) {
  function getSiteInfo({
    query,
    variables,
    config: cfg,
  }: {
    query?: string
    variables?: any
    config?: Partial<LocalConfig>
    preview?: boolean
  } = {}): Promise<GetSiteInfoResult> {
    return Promise.resolve({
      categories: [
        {
          id: 'Hombres',
          name: 'Hombres',
          slug: 'Hombres',
          path: '/Hombres',
        },
        {
          id: 'Mujeres',
          name: 'Mujeres',
          slug: 'Mujeres',
          path: '/Mujeres',
        },
        {
          id: 'Niños',
          name: 'Niños',
          slug: 'Niños',
          path: '/Niños',
        },
      ],
      brands: [],
    })
  }

  return getSiteInfo
}
