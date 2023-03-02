/** Trong Nextjs có folder Pages thì khi add 1 folder nào vô thì nó sẽ biến đổi thành 1 routing tương ứng */

/** Có 3 dạng Route:
 * - Index Route: file name index
 * - Nested Route: nested folder in pages
 * - Dynamic Route: add parameter in routing
 */

/** Dynamic Route
 *  Name                        File Path
1   Single parameter            pages/posts/[postId].tsx
2   Multiple parameters         pages/categories/[categoryId]/posts/[postId].tsx
3   Catch all routes            pages/posts/[...slug].tsx
4   Optional catch all routes   pages/posts/[[...slug]].tsx
 */

/** Single parameter: pages/posts/[postId].tsx will match:
# URL                       router.query
1 /posts/123                { postId: '123' }
2 /posts/developer-tips     { postId: 'developer-tips' }
3 /posts/developer-roadmap  { postId: 'developer-roadmap' } */

/** Multiple parameters: pages/categories/[categoryId]/posts/[postId].tsx will match:
# URL                               router.query
1 /categories/123/posts/456         { categoryId: '123', postId: '456' }
2 /categories/frontend/posts/js     { categoryId: 'frontend', postId: 'js' } */

/** Catch all routes: pages/posts/[...slug].tsx will match:
# URL                             router.query
1 /posts/123                      { slug: ['123'] }
2 /posts/easy-nextjs              { slug: ['easy-nextjs'] }
3 /posts/easy/frontend            { slug: ['easy', 'frontend'] }
4 /posts/easy/frontend/nextjs     { slug: ['easy', 'frontend', 'nextjs'] } */

/** Route match order
 * Priority     Name                  File Path                 Code
      1         Pre-defined routes    pages/posts/create.tsx    A
      2         Dynamic routes        pages/posts/[postId].tsx  B
      3         Catch all routes      pages/posts/[...slug].tsx C


      Examples:
    #     if user visit             it will match
    1     /posts/create                   A
    2     /posts/12345                    B
    3     /posts/developer-tips           B
    4     /posts/frontend-road-map        B
    5     /posts/12345/comments           C
    6     /posts/12345/comments/123       C
 */
