import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaySharedModule } from 'app/shared/shared.module';
import { AgentComponent } from './agent.component';
import { AgentDetailComponent } from './agent-detail.component';
import { AgentUpdateComponent } from './agent-update.component';
import { AgentDeleteDialogComponent } from './agent-delete-dialog.component';
import { agentRoute } from './agent.route';

@NgModule({
  imports: [GatewaySharedModule, RouterModule.forChild(agentRoute)],
  declarations: [AgentComponent, AgentDetailComponent, AgentUpdateComponent, AgentDeleteDialogComponent],
  entryComponents: [AgentDeleteDialogComponent]
})
export class GatewayAgentModule {}
