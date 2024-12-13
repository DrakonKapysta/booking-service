/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProjectsIndexImport } from './routes/projects/index'
import { Route as ProjectsProjectNameIndexImport } from './routes/projects/$projectName/index'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()
const ProfileIndexLazyImport = createFileRoute('/profile/')()
const ProfileKeysIndexLazyImport = createFileRoute('/profile/keys/')()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const ProfileIndexLazyRoute = ProfileIndexLazyImport.update({
  id: '/profile/',
  path: '/profile/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/profile/index.lazy').then((d) => d.Route))

const ProjectsIndexRoute = ProjectsIndexImport.update({
  id: '/projects/',
  path: '/projects/',
  getParentRoute: () => rootRoute,
} as any)

const ProfileKeysIndexLazyRoute = ProfileKeysIndexLazyImport.update({
  id: '/profile/keys/',
  path: '/profile/keys/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/profile/keys/index.lazy').then((d) => d.Route),
)

const ProjectsProjectNameIndexRoute = ProjectsProjectNameIndexImport.update({
  id: '/projects/$projectName/',
  path: '/projects/$projectName/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/projects/': {
      id: '/projects/'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof ProjectsIndexImport
      parentRoute: typeof rootRoute
    }
    '/profile/': {
      id: '/profile/'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/projects/$projectName/': {
      id: '/projects/$projectName/'
      path: '/projects/$projectName'
      fullPath: '/projects/$projectName'
      preLoaderRoute: typeof ProjectsProjectNameIndexImport
      parentRoute: typeof rootRoute
    }
    '/profile/keys/': {
      id: '/profile/keys/'
      path: '/profile/keys'
      fullPath: '/profile/keys'
      preLoaderRoute: typeof ProfileKeysIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/projects': typeof ProjectsIndexRoute
  '/profile': typeof ProfileIndexLazyRoute
  '/projects/$projectName': typeof ProjectsProjectNameIndexRoute
  '/profile/keys': typeof ProfileKeysIndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/projects': typeof ProjectsIndexRoute
  '/profile': typeof ProfileIndexLazyRoute
  '/projects/$projectName': typeof ProjectsProjectNameIndexRoute
  '/profile/keys': typeof ProfileKeysIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/projects/': typeof ProjectsIndexRoute
  '/profile/': typeof ProfileIndexLazyRoute
  '/projects/$projectName/': typeof ProjectsProjectNameIndexRoute
  '/profile/keys/': typeof ProfileKeysIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/projects'
    | '/profile'
    | '/projects/$projectName'
    | '/profile/keys'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/projects'
    | '/profile'
    | '/projects/$projectName'
    | '/profile/keys'
  id:
    | '__root__'
    | '/'
    | '/projects/'
    | '/profile/'
    | '/projects/$projectName/'
    | '/profile/keys/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  ProjectsIndexRoute: typeof ProjectsIndexRoute
  ProfileIndexLazyRoute: typeof ProfileIndexLazyRoute
  ProjectsProjectNameIndexRoute: typeof ProjectsProjectNameIndexRoute
  ProfileKeysIndexLazyRoute: typeof ProfileKeysIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  ProjectsIndexRoute: ProjectsIndexRoute,
  ProfileIndexLazyRoute: ProfileIndexLazyRoute,
  ProjectsProjectNameIndexRoute: ProjectsProjectNameIndexRoute,
  ProfileKeysIndexLazyRoute: ProfileKeysIndexLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/projects/",
        "/profile/",
        "/projects/$projectName/",
        "/profile/keys/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/projects/": {
      "filePath": "projects/index.tsx"
    },
    "/profile/": {
      "filePath": "profile/index.lazy.tsx"
    },
    "/projects/$projectName/": {
      "filePath": "projects/$projectName/index.tsx"
    },
    "/profile/keys/": {
      "filePath": "profile/keys/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
