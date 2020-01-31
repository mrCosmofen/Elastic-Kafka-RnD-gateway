import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'instance',
        loadChildren: () => import('./instance/instance.module').then(m => m.GatewayInstanceModule)
      },
      {
        path: 'agent',
        loadChildren: () => import('./agent/agent.module').then(m => m.GatewayAgentModule)
      },
      {
        path: 'work',
        loadChildren: () => import('./work/work.module').then(m => m.GatewayWorkModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class GatewayEntityModule {}
