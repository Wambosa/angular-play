import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

// import { AuthGuard } from './lib/auth'
import { HistoryComponent } from './components/about/history.component'
import { ProjectComponent } from './components/about/project.component'
import { ResumeComponent } from './components/about/resume.component'

const routes: Routes = [
  {
    path: 'history',
    component: HistoryComponent,
  },
  {
    path: 'project',
    component: ProjectComponent,
  },
  {
    path: 'resume',
    component: ResumeComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
