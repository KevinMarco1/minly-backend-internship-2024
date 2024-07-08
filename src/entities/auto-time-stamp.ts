import { BeforeUpdate, CreateDateColumn, UpdateDateColumn } from "typeorm";

export abstract class AutoTimestamp {
    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;
  
    @BeforeUpdate()
    onUpdate() {
      this.updated_at = new Date();
    }
  }