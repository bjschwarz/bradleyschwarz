'use client'

import {Suspense} from "react";
import ProjectDetail from '@/components/ProjectDetail';


export default function Detail({}) {

  return (
    <Suspense>
        <ProjectDetail></ProjectDetail>
    </Suspense>
  );
}